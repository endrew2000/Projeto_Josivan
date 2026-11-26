import { useNavigate } from 'react-router-dom';
import { encerrarSessao, obterToken } from '../services/api';

export function Navbar() {
  const navigate = useNavigate();

  function lidarComSaida() {
    encerrarSessao();
    navigate('/', { replace: true });
  }

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center shadow-sm relative z-10">
      
      {/* Esquerda: Título */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-yellow-500">
          Repositório Acadêmico
        </h1>
      </div>

      {/* Direita: Link Oficial do Portal */}
      <div className="flex items-center gap-3">
        <a 
          href="https://aluno.sereduc.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-md transition-colors shadow-sm inline-block text-sm"
        >
          Acessar Portal do Aluno
        </a>
        {obterToken() && (
          <button
            type="button"
            onClick={lidarComSaida}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 rounded-md transition-colors shadow-sm inline-block text-sm cursor-pointer"
          >
            Sair
          </button>
        )}
      </div>

    </nav>
  );
}
