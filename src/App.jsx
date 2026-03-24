import { useState } from "react";
import Form from "./components/Form";
import Secao from "./components/Secao";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto(produto) {
    console.log("adicionando:", produto); // teste
    setProdutos([...produtos, produto]);
  }

  const secoes = ["computadores", "acessórios", "impressoras", "games", "gadgets"];

  return (
    <div>
      <h1>Dados do Produto</h1>

      <Form onAdd={adicionarProduto} />

      {secoes.map(secao => (
        <Secao key={secao} nome={secao} produtos={produtos} />
      ))}
    </div>
  );
}

export default App;