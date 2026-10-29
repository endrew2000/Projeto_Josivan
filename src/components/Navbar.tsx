// Componente responsável exclusivamente pela barra de navegação superior (SRP)
export function Navbar() {
  return (
    // header estilizado com Tailwind: fundo branco, sombra leve e espaçamento interno
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Nome e identidade do Projeto */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            Repositório Acadêmico
          </span>
        </div>

        {/* Botão de Login com Google */}
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Entrar com Google
        </button>

      </div>
    </header>
  );
}