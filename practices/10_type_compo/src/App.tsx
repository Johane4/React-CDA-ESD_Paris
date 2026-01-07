import React from "react";
import Card from "./components/Card";

//const App: React.FC = () => { // vous pouvez tomber sur cette manière d'écrire mais plus moderne

const App = () => {
  const cardsData = [
    { title: "Carte 1", description: "Description de la carte 1" },
    { title: "Carte 2" }, // pas de description
    { title: "Carte 3", description: "Description de la carte 3" },
  ];

  return (
    <div className="app">
      <h1>Mes cartes</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
