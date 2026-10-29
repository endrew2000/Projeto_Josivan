interface Titulus (){
    titulo: string
    disciplina: string
}   

function CardTitulos(props){
    return (
        <>
        <p> {props.Titulus} </p>
        <p> {props.disciplina} </p>
        </>
    )
} export default CardTitulos

// src/components/CardTitulos.jsx

export function CardTitulos({ titulo, disciplina }) {
    return (
        // Trocamos o fragmento <> por uma <div> para podermos estilizar a caixa do cartão
        <div className=""> 
            
            {/* Aplique classes para aumentar a letra e deixar em negrito */}
            <h3 className=""> {titulo} </h3>
            
            {/* Aplique classes para diminuir a letra e deixar cinza */}
            <p className=""> {disciplina} </p>
            
        </div>
    )
}