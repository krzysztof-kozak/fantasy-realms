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
        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[0].basePoints}</p>
          <div style={{background: "url(deck/deck.jpg)"}} className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[1].basePoints}</p>
          <div className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[2].basePoints}</p>
          <div className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[3].basePoints}</p>
          <div className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[4].basePoints}</p>
          <div style={{background: "url()"}} className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[5].basePoints}</p>
          <div className="card"></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[6].basePoints}</p>
          <div className="card"></div>
        </div>
      </section>
    </div>
  );
}
