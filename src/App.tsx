import { Navbar } from './components/Navbar';
import CardTitulos from './components/CardMaterial';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
  {/*PRIMEIRO ELEMENTO*/}
        <h1 className="text-2xl font-semibold text-gray-800">
          Materiais de Estudo
        </h1>
        <p className="text-gray-600 mt-2">
          Selecione o curso e o período abaixo para filtrar os materiais aprovados.
        </p>
  {/*SEGUNDO ELEMENTO*/}
        <div className="mt-8">
          <CardTitulos
            titulo='Introdução ao React'
            disciplina='Programação Web'
          />
        </div>

      </main>
    </div>
  );
}

export default App;