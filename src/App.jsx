import "./App.css";
import { useState } from "react";
import ProductItem from "./productItem";

function App() {
  const [koszyk, setKoszyk] = useState([]);
  const [newprodukt, setProdukt] = useState("");

  const handleChange = (event) => {
    setProdukt(event.target.value);
  };

  const addprodukt = () => {
    if (newprodukt.trim() === "") return;
    const newproduktObj = {
      id: Date.now(),
      name: newprodukt,
      bought: false, // nowa właściwość
    };
    setKoszyk([...koszyk, newproduktObj]);
    setProdukt("");
  };

  const deleteProdukt = (id) => {
    setKoszyk(koszyk.filter((produkt) => produkt.id !== id));
  };

  const toggleBought = (id) => {
    setKoszyk(
      koszyk.map((produkt) =>
        produkt.id === id ? { ...produkt, bought: !produkt.bought } : produkt
      )
    );
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          font-family: arial;
        }
        header{
          background-color: rgb(187, 220, 190);
          height: 72px;
          font-size: 120%;
          display: flex; 
          justify-content: center; 
          align-items: center;
          text-align: center;
        }
        footer{
          background-color: rgb(187, 220, 190);
          height: 73px;
          font-size: 120%;
          display: flex; 
          justify-content: center; 
          align-items: center;
          text-align: center;
        }
        #black {
          background-color: black;
          height: 800px;
          justify-content: center;
        }
        #add {
          padding: 20px;
          justify-content: center;
          text-align:center;
          color: rgb(187, 220, 190);
          border: 2px solid rgb(187, 220, 190);
          height: 120px;
          width: 300px;
          border-radius: 5px;
          margin: 0 auto;
        }
      #add button {
        color: black;
        background-color: rgb(187, 220, 190);
        border: none;
        font-size: 16px;   
        font-weight: bold;  
        padding: 10px 20px;    
        border-radius: 5px;  
        cursor: pointer;
        transition: 0.3s;
      }
      #add input{
        border:none;
        background-color:rgb(187, 220, 190);
      }
      #add button:hover {
        background-color: black;
        color: rgb(187, 220, 190);
      }
      #list {
        padding: 20px;
      }
      h4{
        display: flex;
        alignItems: center;
        gap: 10px;
        marginBottom: 10px;
        color :rgb(187, 220, 190);
      }
      .btn,
      .btn2{
      border:none;
      height:25px;
      width:60px;
      color:rgb(187, 220, 190);
      background-color:black;
      border-radius:10px; 
      cursor:pointer;
      transition:0.3s;
      }
      .btn:hover,
      .btn2:hover {
       background-color: rgb(187, 220, 190);
      color: black;
      }

      `}</style>

      <header>
        <h1>Witaj w koszyku</h1>
      </header>
<div id="black">
      <br /><br /><div id="add">
        <h2>Dodaj Do Koszyka</h2><br />
        <input value={newprodukt} onChange={handleChange} /><br /><br />
        <button onClick={addprodukt}>Dodaj produkt</button> 
      </div><br /><br />
        <h4>Produkty w Koszyku:</h4>
      <div id="list">
        {koszyk.map((produkt) => (
          <ProductItem
            key={produkt.id}
            produkt={produkt}
            deleteProdukt={deleteProdukt}
            toggleBought={toggleBought}
          />
        ))} <br /> <br />
      </div>
</div>
      <footer>
        <h3>Made By : S3-ba.</h3>
      </footer>
    </>
  );
}

export default App;
