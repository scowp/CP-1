
export default function Carteirinha(props){

    return (
        <div className="card carteira">
            <img src="https://via.placeholder.com/300" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body p-0">
                <ul class="list-group">
                    <li className="list-group-item">{props.dados.Matheus[0]}</li>
                    <li className="list-group-item">{props.dados.Matheus[1]}</li>
                    <li className="list-group-item">{props.dados.Matheus[2]}</li>
                    <li className="list-group-item">{props.dados.Matheus[3]}</li>
                </ul>
            </div>
        </div>
    )
}