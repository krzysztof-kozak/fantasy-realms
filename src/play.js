import React, { useState } from "react";
import "../src/css/play.css";
import deck from "./data/deck.json";

export default function Play() {
  const [cards, setCards] = useState(deck.cards);

  console.log(cards);

  return (
    <div className="gameContainer">
      <section className="drawPile">
        <div></div>
      </section>

      <section className="discardPile">
        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </section>

      <section className="playerHand">

      <div className="cardContainer">
      
      </div>


      </section>
    </div>
  );
}
