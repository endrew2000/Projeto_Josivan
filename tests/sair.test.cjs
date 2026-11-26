const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const { transformSync } = require('../backend/node_modules/esbuild');

function montarNavbar(autenticado) {
  const storage = new Map(autenticado ? [
    ['@uninassau_ads:token', 'token-teste'],
    ['@uninassau_ads:usuario', '{"nome":"Teste"}'],
  ] : []);
  let destino;
  function carregar(arquivo, dependencias) {
    const modulo = { exports: {} };
    const codigo = transformSync(readFileSync(arquivo, 'utf8'), {
      loader: 'tsx', format: 'cjs',
      define: { 'import.meta.env.VITE_API_URL': 'undefined' },
      banner: arquivo.endsWith('.tsx') ? "const React = require('react');" : '',
    }).code;
    vm.runInNewContext(codigo, {
      module: modulo, exports: modulo.exports,
      localStorage: {
        getItem: chave => storage.get(chave) ?? null,
        removeItem: chave => storage.delete(chave),
      },
      require: nome => dependencias[nome],
    });
    return modulo.exports;
  }
  const api = carregar('src/services/api.ts', {});
  const { Navbar } = carregar('src/components/Navbar.tsx', {
    '../services/api': api,
    'react-router-dom': { useNavigate: () => (url, opcoes) => { destino = { url, opcoes }; } },
    react: { createElement: (type, props, ...children) => ({ type, props, children }) },
  });
  function elementos(no) {
    return no && typeof no === 'object' ? [no, ...no.children.flatMap(elementos)] : [];
  }
  return { elementos: elementos(Navbar()), storage, destino: () => destino };
}

test('Sair apaga a sessão e retorna à tela inicial substituindo a rota atual', () => {
  const tela = montarNavbar(true);
  const botao = tela.elementos.find(no => no.type === 'button' && no.children.includes('Sair'));
  assert.ok(botao, 'Sair deve estar disponível na sessão ativa');
  botao.props.onClick();
  assert.equal(tela.storage.has('@uninassau_ads:token'), false);
  assert.equal(tela.storage.has('@uninassau_ads:usuario'), false);
  assert.equal(tela.destino().url, '/');
  assert.equal(tela.destino().opcoes.replace, true);
});

test('Sair não aparece sem sessão', () => {
  const tela = montarNavbar(false);
  assert.equal(tela.elementos.some(no => no.type === 'button' && no.children.includes('Sair')), false);
});
