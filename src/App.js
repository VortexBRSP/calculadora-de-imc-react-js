import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function handleClick() {
    var alt = altura / 100;
    console.log(alt);
    if (!peso == "" || !altura == "") {
      setResultado("IMC: " + (peso / (alt * alt)).toFixed(2));
    } else {
      alert("Preencha os campos corretamente!");
    }
  }
  return (
    <div className="App">
      <div className="container-calculadora">
        <h1 className="title">CALCULADORA DE IMC</h1>
        <div className="input-container">
          <input
            className="inputs"
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso em KG Ex: 65"
          ></input>
          <input
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="inputs"
            placeholder="Digite sua altura em CM Ex: 170"
          ></input>
          <button className="calcularbtn" onClick={handleClick}>
            Calcular
          </button>
          <span className="resultado-span">{resultado}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
