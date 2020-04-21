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
    setCards([...randomDeck]);
    setplayerHand([
      cards[0],
      cards[1],
      cards[2],
      cards[3],
      cards[4],
      cards[5],
      cards[6],
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
          <span>
            TOTAL SCORE:
            {cards[0].basePoints +
              cards[1].basePoints +
              cards[2].basePoints +
              cards[3].basePoints +
              cards[4].basePoints +
              cards[5].basePoints +
              cards[6].basePoints}
          </span>
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
        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[0].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[22].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[1].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[1].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[2].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[2].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[3].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[3].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[4].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[4].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[5].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[5].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>

        <div className="card-container">
          <button>Discard</button>
          <p>Total Value: {cards[6].basePoints}</p>
          <div
            style={{
              background: `url(./deck/${cards[6].image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "85%",
            }}
            className="card"
          ></div>
        </div>
      </section>
    </div>
  );
}
