import React, { useState, useEffect } from "react";
import "../src/css/play.css";
import deck from "./data/deck.json";

export default function Play() {
  const [cards, setCards] = useState(deck.cards);
  const [playerHand, setplayerHand] = useState([]);

  function shuffle(array) {
    //Fisher–Yates shuffle: source: https://bost.ocks.org/mike/shuffle/
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  const handleStart = () => {
    const randomDeck = shuffle(cards);
    setCards(randomDeck)
  };

  return (
    <div className="gameContainer">
      <section className="drawPile">
        <div></div>
        <button
          onClick={handleStart}
          style={{ padding: "5px", fontSize: "1rem" }}
        >
          START GAME
        </button>
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
          <div
            style={{
              background: `url(./deck/${cards[0].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="card"
          ></div>
        </div>
      </section>
    </div>
  );
}
