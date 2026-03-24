import { useState } from "react";

function Form({ onAdd }) {
  const [form, setForm] = useState({
    secao: "",
    marca: "",
    nome: "",
    preco: "",
    estado: "Novo"
  });

  function handleSubmit() {
  if (form.secao === "") {
    alert("Escolha uma seção!");
    return;
  }

  if (form.marca === "") {
    alert("Escolha uma marca!");
    return;
  }

  if (form.nome.trim() === "") {
    alert("Digite um nome!");
    return;
  }

  if (!form.preco || Number(form.preco) <= 0) {
    alert("Digite um preço válido!");
    return;
  }

  onAdd(form);

  setForm({
    secao: "",
    marca: "",
    nome: "",
    preco: "",
    estado: "Novo"
  });
}
  return (
    <div className="form-container">

      <select value={form.secao}onChange={e => setForm({ ...form, secao: e.target.value })}>
          <option value="">Selecione uma seção</option>  {/* 👈 novo */}
          <option value="computadores">Computadores</option>
          <option value="acessórios">Acessórios</option>
          <option value="impressoras">Impressoras</option>
          <option value="games">Games</option>
          <option value="gadgets">Gadgets</option>
     </select>

      <select value={form.marca}onChange={e => setForm({ ...form, marca: e.target.value })}>
          <option value="">Selecione uma marca</option> {/* 👈 novo */}
          <option>HP</option>
          <option>Dell</option>
          <option>Positivo</option>
          <option>Asus</option>
          <option>Xing Ling genérico</option>
      </select>

      <input
        type="text"
        placeholder="Nome"
        value={form.nome}
        onChange={e => setForm({ ...form, nome: e.target.value })}
      />

      <input
        type="number"
        placeholder="Preço"
        value={form.preco}
        onChange={e => setForm({ ...form, preco: e.target.value })}
      />

      <div>
        <label>
          <input
            type="radio"
            name="estado"
            value="Novo"
            checked={form.estado === "Novo"}
            onChange={e => setForm({ ...form, estado: e.target.value })}
          />
          Novo
        </label>

        <label>
          <input
            type="radio"
            name="estado"
            value="Usado"
            checked={form.estado === "Usado"}
            onChange={e => setForm({ ...form, estado: e.target.value })}
          />
          Usado
        </label>
      </div>

      <button onClick={handleSubmit}>Inserir</button>

    </div>
  );
}

export default Form;