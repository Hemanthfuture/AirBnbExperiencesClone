import React from "react";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Card from "./components/Card";
import Cardabove from "./components/Cardabove";
import data from "./components/data";
function App() {

  const cards=data.map((card)=>{
          return(
            <Card 
            key={card.id}
            {...card}
            />
          )
        })



  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <Cardabove/>
      <div className="cards-list">
      {cards}
      </div>
    </div>
  );
}

export default App;
