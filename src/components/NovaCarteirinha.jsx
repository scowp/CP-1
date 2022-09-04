import { useState, useRef } from "react"

export default function NovaCarteirinha(){

    const inputNome = useRef(null);
    const [ nome, setNome ] = useState("")

    const inputRm = useRef(null);
    const [ rm, setRm ] = useState("")

    const inputCurso = useRef(null);
    const [ curso, setCurso ] = useState("")

    const inputTurma = useRef(null);
    const [ turma, setTurma ] = useState("")

    function handleClick(e) {
        e.preventDefault()
        setNome(inputNome.current.value)
        setRm(inputRm.current.value)
        setCurso(inputCurso.current.value)
        setTurma(inputTurma.current.value)
        
    }


    return (
        <>
            <div className="card carteira">
                <img src="https://via.placeholder.com/300" className="card-img-top img-fluid" alt="..."/>
                <div className="card-body p-0">
                    <ul className="list-group card-body p-0">
                        <li className="list-group-item">{nome}</li>
                        <li className="list-group-item">{rm}</li>
                        <li className="list-group-item">{curso}</li>
                        <li className="list-group-item">{turma}</li>
                    </ul>
                </div>
            </div>
            <div>
                <form className="d-flex flex-column">
                    <label className="form-label">Nome:</label>
                    <input ref={inputNome} className="form-control" id="nome" type="text" />
                    <label className="form-label">RM:</label>
                    <input ref={inputRm} className="form-control" id="rm" type="text" />
                    <label className="form-label">Curso:</label>
                    <input ref={inputCurso} className="form-control" id="curso" type="text" />
                    <label className="form-label">Turma:</label>
                    <input ref={inputTurma} className="form-control" id="turma" type="text" />
                    <button onClick={handleClick} className="btn btn-primary mt-3" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}