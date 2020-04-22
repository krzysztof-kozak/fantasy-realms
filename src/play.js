import React, { useState, useEffect } from "react";
import "../src/css/play.css";
import deck from "./data/deck.json";

export default function Play() {
  const [cards, setCards] = useState(deck.cards);
  const [playerHand, setPlayerHand] = useState([]);
  const [discardPile, setdiscardPile] = useState([]);
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
    const randomCards = shuffle([...cards]);

    setPlayerHand(randomCards.slice(0, 8));

    randomCards.splice(0, 8);
    setCards(randomCards);
  };

  const discardCard = (toDiscard) => {
    const copyCards = cards.slice();
    const firstCard = copyCards.splice(0, 1);
    setPlayerHand((prev) => [
      ...prev.map((card) => card.id !== toDiscard.id ? card : firstCard[0]),
    ]);
    setCards(copyCards);
    setdiscardPile((prev) => [...prev, { ...toDiscard }]);
  };

  useEffect(() => {
    let sum = [];
    playerHand.forEach((card) => {
      sum.push(card.basePoints);
      setTotalScore(sum.reduce((cur, prev) => cur + prev));
    });
  }, [playerHand]);

  if (discardPile.length > 5) {
    return <h1> GAME ENDED. YOUR TOTAL SCORE IS {totalScore} </h1>;
  }

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
        {discardPile.map((card) => (
          <div
            style={{
              backgroundImage: `url(./deck/${card.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          ></div>
        ))}
      </section>

      <section className="playerHand">
        {playerHand.map((card) => (
          <div className="card-container">
            <button disabled={true} onClick={() => discardCard(card)}>Discard</button>
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
