import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  function handleClick() {
    if (!peso == "" || !altura == "") {
      alert("Altura: " + altura + " Peso: " + peso);
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
        </div>
      </div>
    </div>
  );
}

export default App;
