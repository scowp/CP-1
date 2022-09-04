import './App.css';
import Lampada from './components/Lampada';
import Carros from './components/Carros';

export default function App() {
  
  const dados = {
    Matheus: ["Matheus"," 94250"],
    Luca: ["Luca"," 94425"],
    Adolfo: ["Adolfo"," 94925"]
  }

  const listaCarros = ["Cruze","City","Civic","Versa","Golf","Passat","Bora","HB20","Prisma","Onix"]

  return (
    <div className="App">
      <h1>Checkpoint 1</h1>
      <li>{dados.Matheus[0]} {dados.Matheus[1]}</li>
      <li>{dados.Luca[0]} {dados.Luca[1]}</li>
      <li>{dados.Adolfo[0]} {dados.Adolfo[1]}</li>
      <Lampada/>
      <Carros listaCarros={listaCarros}/>
    </div>
  )
}

