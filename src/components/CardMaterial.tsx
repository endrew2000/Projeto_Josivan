interface Titulus {
    titulo: string
    disciplina: string
}   

function CardTitulos(props:Titulus){
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200" >
        <p className="text-xl font-bold text-gray-800"> {props.titulo} </p>
        <p className="text-sm text-gray-500 mt-1"> {props.disciplina} </p>
        </div>
    )
} export default CardTitulos