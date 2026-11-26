const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const { transformSync } = require('../backend/node_modules/esbuild');

// Executa o componente real, isolando apenas hooks, navegação e a rede.
function abrirFormulario(responder) {
  const estados = [];
  let indice = 0;
  const react = {
    useState(inicial) {
      const posicao = indice++;
      if (!(posicao in estados)) estados[posicao] = inicial;
      return [estados[posicao], valor => { estados[posicao] = valor; }];
    },
    createElement(type, props, ...children) {
      return { type, props: props || {}, children: children.flat(Infinity) };
    },
  };
  const exports = {};
  const modulo = { exports };
  const codigo = transformSync(readFileSync('src/Pages/Login.tsx', 'utf8'), {
    loader: 'tsx', format: 'cjs', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
    banner: "const React = require('react');",
  }).code;
  vm.runInNewContext(codigo, {
    exports, module: modulo, fetch: responder,
    require(nome) {
      if (nome === 'react') return react;
      if (nome === 'react-router-dom') return { useNavigate: () => () => {} };
      if (nome.includes('Navbar')) return { Navbar: () => null };
      if (nome.includes('services/api')) return { URL_BASE_API: 'http://localhost:3333/api', salvarSessao() {} };
      throw new Error(nome);
    },
  });
  function render() { indice = 0; return modulo.exports.Login(); }
  function elementos(no) {
    return no && typeof no === 'object' ? [no, ...no.children.flatMap(elementos)] : [];
  }
  function texto(no) {
    return no && typeof no === 'object' ? no.children.map(texto).join(' ') : String(no ?? '');
  }
  elementos(render()).find(no => no.type === 'button' && texto(no).includes('Cadastre-se')).props.onClick();
  return { render, elementos, texto };
}

test('cadastro envia a rota e os campos obrigatórios aceitos pela API', async () => {
  let requisicao;
  const tela = abrirFormulario(async (url, options) => {
    requisicao = { url, body: JSON.parse(options.body) };
    return { ok: true, json: async () => ({ mensagem: 'Cadastro realizado com sucesso!' }) };
  });
  const campos = tela.elementos(tela.render()).filter(no => no.type === 'input');
  const email = campos.find(no => no.props.type === 'email');
  assert.ok(email, 'O cadastro precisa coletar o e-mail obrigatório no banco');
  campos.find(no => no.props.placeholder === 'Seu nome completo').props.onChange({ target: { value: 'Pessoa Teste' } });
  email.props.onChange({ target: { value: 'teste@example.com' } });
  campos.find(no => no.props.placeholder === 'Ex: 01926669').props.onChange({ target: { value: 'TESTE001' } });
  campos.find(no => no.props.type === 'password').props.onChange({ target: { value: 'senha-teste' } });
  await tela.elementos(tela.render()).find(no => no.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(requisicao.url, 'http://localhost:3333/api/auth/register');
  assert.equal(requisicao.body.email, 'teste@example.com');
  assert.equal(requisicao.body.nome, 'Pessoa Teste');
  assert.equal(requisicao.body.matricula, 'TESTE001');
  assert.equal(requisicao.body.senha, 'senha-teste');
  assert.ok(tela.texto(tela.render()).includes('Cadastro realizado com sucesso!'));
});

test('resposta HTML não é apresentada como falha de conexão', async () => {
  const tela = abrirFormulario(async () => ({
    ok: false, status: 404, json: async () => { throw new SyntaxError('Unexpected token <'); },
  }));
  await tela.elementos(tela.render()).find(no => no.type === 'form').props.onSubmit({ preventDefault() {} });
  const mensagem = tela.texto(tela.render());
  assert.ok(mensagem.includes('404'));
  assert.ok(!mensagem.includes('Erro de conexão'));
});

test('erro de validação retornado pela API é exibido ao usuário', async () => {
  const tela = abrirFormulario(async () => ({ ok: false, json: async () => ({ erro: 'Matrícula ou e-mail já cadastrado no sistema.' }) }));
  await tela.elementos(tela.render()).find(no => no.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.ok(tela.texto(tela.render()).includes('Matrícula ou e-mail já cadastrado no sistema.'));
});

test('servidor indisponível continua mostrando o aviso de conexão', async () => {
  const tela = abrirFormulario(async () => { throw new TypeError('Failed to fetch'); });
  await tela.elementos(tela.render()).find(no => no.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.ok(tela.texto(tela.render()).includes('Erro de conexão com o servidor'));
});
