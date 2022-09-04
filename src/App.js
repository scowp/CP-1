import './App.css';
import Lampada from './components/Lampada';
import Carros from './components/Carros';
import Carteirinha from './components/Carteirinha';
import NovaCarteirinha from './components/NovaCarteirinha';

export default function App() {
  
  const dados = {
    Adolfo: ["Adolfo"," 95484","ADS","1TDSPI"],
    Claudio: ["Claudio"," 92798","ADS","1TDSPI"],
    Luca: ["Luca"," 94425","ADS","1TDSPI"],
    Mateus: ["Mateus"," 92798","ADS","1TDSPI"],
    Matheus: ["Matheus"," 94250","ADS","1TDSPI"]
  }

  const listaCarros = ["Cruze","City","Civic","Versa","Golf","Passat","Bora","HB20","Prisma","Onix"]

  return (
    <div className="container">
      <h1 className="text-center mb-5">Checkpoint 1</h1>
      <ul className="list-group mb-5">
        <li className="list-group-item">{dados.Adolfo[0]} {dados.Adolfo[1]}</li>
        <li className="list-group-item">{dados.Claudio[0]} {dados.Claudio[1]}</li>
        <li className="list-group-item">{dados.Luca[0]} {dados.Luca[1]}</li>
        <li className="list-group-item">{dados.Mateus[0]} {dados.Mateus[1]}</li>
        <li className="list-group-item">{dados.Matheus[0]} {dados.Matheus[1]}</li>
      </ul>

      <Lampada/>
      <Carros listaCarros={listaCarros}/>
      <div className="d-flex justify-content-evenly mb-5">
        <Carteirinha dados={dados}/>
        <Carteirinha dados={dados}/>
        <Carteirinha dados={dados}/>
        <NovaCarteirinha/>
      </div>
    </div>
  )
}

