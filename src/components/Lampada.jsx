import { useState } from "react"
import imagem_ligado from "./assets/img/pic_bulbon.gif"
import imagem_desligado from "./assets/img/pic_bulboff.gif"

export default function Lampada(){

    const [imagem, setImagem] = useState(imagem_desligado)

    return(
        <div className="d-flex flex-column align-items-center">
            <img width="150px" src={imagem}/>
            <button className="btn btn-primary mt-4" onClick={()=>imagem == imagem_desligado ? setImagem(imagem_ligado): setImagem(imagem_desligado)}>Switch</button>
        </div>
    )
}