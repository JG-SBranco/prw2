import Card from "./Card";

function Secao({ nome, produtos }) {
  const lista = produtos.filter(p => p.secao === nome);

  if (lista.length === 0) return null;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{nome}</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {lista.map((p, i) => (
          <Card key={i} produto={p} />
        ))}
      </div>
    </div>
  );
}

export default Secao;