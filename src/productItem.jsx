function ProductItem({ produkt, deleteProdukt, toggleBought }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        border: "2px solid rgb(187, 220, 190)",
        backgroundColor:"rgb(187, 220, 190)",
        borderRadius: "5px",
        height: "30px"
      }}
    >
      <h1
        style={{
          textDecoration: produkt.bought ? "line-through" : "none",
          color: produkt.bought ? "gray" : "black",
          fontSize: "20px",
          color: "black"   
        }}
      >
       * {produkt.name}
      </h1>
      <button class="btn" onClick={() => deleteProdukt(produkt.id)}>Usuń</button>
      <button class="btn2" onClick={() => toggleBought(produkt.id)}>
        {produkt.bought ? "Cofnij" : "Kupiono"}
      </button>
    </div>
  );
}

export default ProductItem;