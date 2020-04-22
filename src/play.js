import React, { useState, useEffect } from "react";
import "../src/css/play.css";
import deck from "./data/deck.json";

export default function Play() {
  const [cards, setCards] = useState(deck.cards);
  const [playerHand, setplayerHand] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

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
    setplayerHand(randomDeck.slice(0, 8));
    setCards([...randomDeck].splice(0, 7));
    setCards([...randomDeck]);
  };

  const discardCard = (toDiscard) => {
    setplayerHand((prev) => [
      ...prev.filter((card) => card !== toDiscard),
      cards[0],
    ]);
  };

  return (
    <div className="gameContainer">
      <section className="drawPile">
        <div></div>
        <section>
          <button
            onClick={handleStart}
            style={{ padding: "5px", fontSize: "1rem" }}
          >
            DRAW
          </button>
          <span>TOTAL SCORE:{totalScore}</span>
        </section>
      </section>

      <section className="discardPile">
        <div></div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </section>

      <section className="playerHand">
        {playerHand.map((card) => (
          <div className="card-container">
            <button onClick={() => discardCard(card)}>Discard</button>
            <p>Total Value: {card.basePoints}</p>
            <div
              style={{
                backgroundImage: `url(./deck/${card.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "85%",
              }}
              className="card"
            ></div>
          </div>
        ))}
      </section>
    </div>
  );
}
