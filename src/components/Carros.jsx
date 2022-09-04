
export default function Carros(props){

//tentei usar o metodo .map mas não funcionou
    return (
        <ul className="list-group mt-5 mb-5">
            <li className="list-group-item">{props.listaCarros[0]}</li>
            <li className="list-group-item">{props.listaCarros[1]}</li>
            <li className="list-group-item">{props.listaCarros[2]}</li>
            <li className="list-group-item">{props.listaCarros[3]}</li>
            <li className="list-group-item">{props.listaCarros[4]}</li>
            <li className="list-group-item">{props.listaCarros[5]}</li>
            <li className="list-group-item">{props.listaCarros[6]}</li>
            <li className="list-group-item">{props.listaCarros[7]}</li>
            <li className="list-group-item">{props.listaCarros[9]}</li>
        </ul>
    )
}