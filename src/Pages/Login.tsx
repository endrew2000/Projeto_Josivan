import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { URL_BASE_API, salvarSessao } from '../services/api';

export function Login() {
  const navigate = useNavigate();

  // Controla se a tela mostra Login (false) ou Cadastro (true)
  const [modoCadastro, setModoCadastro] = useState(false);

  // Controla a exibição do aviso de "Esqueci minha senha"
  const [avisoEsqueciSenha, setAvisoEsqueciSenha] = useState(false);

  // Campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('aluno');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  // Feedbacks da tela
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function lidarComEnvio(evento: FormEvent) {
    evento.preventDefault();
    setMensagemErro('');
    setMensagemSucesso('');
    setCarregando(true);

    try {
      if (modoCadastro) {
        // --- FLUXO DE CADASTRO ---
        const resposta = await fetch(`${URL_BASE_API}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email, matricula, senha, cargo }),
        });

        let dados;
        try {
          dados = await resposta.json();
        } catch {
          setMensagemErro(`O servidor retornou uma resposta inválida (HTTP ${resposta.status}). Verifique o endereço da API.`);
          return;
        }

        if (!resposta.ok) {
          setMensagemErro(dados.erro || 'Não foi possível realizar o cadastro.');
          return;
        }

        setMensagemSucesso('Cadastro realizado com sucesso! Agora faça seu login.');
        setModoCadastro(false); // Volta automaticamente para o modo Login
        setSenha('');
      } else {
        // --- FLUXO DE LOGIN ---
        const resposta = await fetch(`${URL_BASE_API}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ matricula, senha }),
        });

        const dados = await resposta.json();

        if (!resposta.ok) {
          setMensagemErro(dados.erro || 'Não foi possível realizar o login.');
          return;
        }

        salvarSessao(dados.token, dados.usuario);
        navigate('/repositorio');
      }
    } catch {
      setMensagemErro('Erro de conexão com o servidor. Verifique se o Back-end está ativo.');
    } finally {
      setCarregando(false);
    }
  }

  function alternarModo() {
    setModoCadastro(!modoCadastro);
    setMensagemErro('');
    setMensagemSucesso('');
    setAvisoEsqueciSenha(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Camada da imagem de fundo (Marca d'água) */}
        <div
          className="absolute inset-0 bg-[url('/uninassau-bg.jpg')] bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none"
        />

        {/* Cartão do Formulário */}
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">
              {modoCadastro ? 'Criar Nova Conta' : 'Acesso ao Repositório'}
            </h2>
            <p className="text-gray-600">
              {modoCadastro
                ? 'Preencha seus dados para se cadastrar no acervo.'
                : 'Faça login para acessar os materiais da turma de ADS.'}
            </p>
          </div>

          {mensagemErro && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {mensagemErro}
            </div>
          )}

          {mensagemSucesso && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
              {mensagemSucesso}
            </div>
          )}

          <form onSubmit={lidarComEnvio} className="flex flex-col gap-5">
            {/* Campos extras que só aparecem no modo Cadastro */}
            {modoCadastro && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email-cadastro">
                    E-mail
                  </label>
                  <input
                    id="email-cadastro"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Perfil / Cargo
                  </label>
                  <select
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all bg-white"
                  >
                    <option value="aluno">Aluno</option>
                    <option value="representante">Representante</option>
                    <option value="professor">Professor</option>
                    <option value="dev">Dev</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Matrícula
              </label>
              <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                placeholder="Ex: 01926669"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all bg-white"
                required
              />

              {/* Botão "Esqueci minha senha" (só aparece no modo Login) */}
              {!modoCadastro && (
                <div className="text-right mt-1.5">
                  <button
                    type="button"
                    onClick={() => setAvisoEsqueciSenha(!avisoEsqueciSenha)}
                    className="text-xs text-[#1E3A8A] hover:underline font-medium cursor-pointer"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              )}
            </div>

            {/* Caixa de alerta/direcionamento quando clicar em "Esqueci minha senha" */}
{avisoEsqueciSenha && !modoCadastro && (
  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
    <div className="flex items-start justify-between gap-2 mb-1">
      <p className="font-semibold">Redefinição de senha:</p>
      <button
        type="button"
        onClick={() => setAvisoEsqueciSenha(false)}
        className="text-amber-800 hover:text-amber-950 font-bold text-sm leading-none cursor-pointer px-1"
        title="Fechar aviso"
      >
        ✕
      </button>
    </div>

    <p>
      Por segurança, sua senha é criptografada e não pode ser recuperada. Solicite o reset ao{' '}
      <strong>Representante da Turma</strong> ou à equipe <strong>Dev</strong>.
    </p>

    <div className="mt-2.5 flex items-center justify-between gap-2">
      <a
        href="https://wa.me/5581999999999?text=Ol%C3%A1%2C%20esqueci%20minha%20senha%20do%20Reposit%C3%B3rio%20Acad%C3%AAmico."
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1E3A8A] font-bold hover:underline"
      >
        Falar com o suporte no WhatsApp →
      </a>

      <button
        type="button"
        onClick={() => setAvisoEsqueciSenha(false)}
        className="text-amber-800 hover:underline font-semibold cursor-pointer"
      >
        Voltar
      </button>
    </div>
  </div>
)}

            <button
              type="submit"
              disabled={carregando}
              className="w-full mt-2 bg-[#1E3A8A] hover:bg-blue-900 disabled:opacity-60 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm hover:bg-yellow-600 cursor-pointer"
            >
              {carregando
                ? 'Processando...'
                : modoCadastro
                  ? 'Cadastrar'
                  : 'Entrar no Repositório'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-100 pt-6">
            {modoCadastro ? 'Já tem uma conta?' : 'Primeiro acesso?'}{' '}
            <button
              type="button"
              onClick={alternarModo}
              className="text-yellow-600 font-semibold hover:underline hover:text-blue-800 cursor-pointer"
            >
              {modoCadastro ? 'Voltar para o login' : 'Cadastre-se'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
