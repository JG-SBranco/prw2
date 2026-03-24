import hp from "../assets/hp_logo.png";
import dell from "../assets/dell_logo.png";
import asus from "../assets/asus_logo.png";
import positivo from "../assets/positivo_logo.png";
import generico from "../assets/generico_logo.png";

function Card({ produto }) {

  function getImagem(marca) {
    switch (marca) {
      case "HP": return hp;
      case "Dell": return dell;
      case "Asus": return asus;
      case "Positivo": return positivo;
      default: return generico;
    }
  }

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "200px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      
      {/* IMAGEM */}
      <img 
        src={getImagem(produto.marca)} 
        alt={produto.marca}
        style={{ width: "80px", marginBottom: "10px" }}
      />

      <p>{produto.nome}</p>
      <p><strong>R$ {produto.preco}</strong></p>
      <p>{produto.estado}</p>
    </div>
  );
}

export default Card;
