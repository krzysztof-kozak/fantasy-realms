import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "../src/css/play.css";
import deck from "./data/deck.json";

export default function Play() {
  const [cards, setCards] = useState(deck.cards);
  const [playerHand, setPlayerHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [isGameStarted, setisGameStarted] = useState(false);
  const [isGameFinished, setisGameFinished] = useState(false);
  const [endGameMessageDiplay, setEndGameMessageDiplay] = useState("none");

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
      ...prev.map((card) => (card.id !== toDiscard.id ? card : firstCard[0])),
    ]);
    setCards(copyCards);
    setDiscardPile((prev) => [...prev, { ...toDiscard }]);
  };

  const restartGame = () => {
    setCards(deck.cards);
    setPlayerHand([]);
    setDiscardPile([]);
    setTotalScore(0);
    setisGameStarted(false);
    setisGameFinished(false);
    setEndGameMessageDiplay("none");
  };

  useEffect(() => {
    let sum = [];
    playerHand.forEach((card) => {
      sum.push(card.basePoints);
      setTotalScore(sum.reduce((cur, prev) => cur + prev));
    });

    playerHand.length > 0 ? setisGameStarted(true) : setisGameStarted(false);
  }, [playerHand]);

  useEffect(() => {
    if (discardPile.length >= 5) {
      setisGameFinished(true);
      setEndGameMessageDiplay("block");
    }
  }, [discardPile]);

  return (
    <div className="gameContainer box">
      <section className="drawPile">
        <div></div>
        <section>
          <button
            disabled={isGameStarted}
            onClick={handleStart}
            style={{ padding: "5px", fontSize: "1rem" }}
          >
            Draw new hand
          </button>
          <button
            onClick={restartGame}
            style={{ display: endGameMessageDiplay }}
          >
            Restart
          </button>
          <span style={{ display: discardPile.length >= 5 ? "none" : "block" }}>
            Current score:{totalScore}
          </span>
          <p style={{ display: endGameMessageDiplay }}>
            Game finished. Your final score is {totalScore}
          </p>
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
            <button disabled={isGameFinished} onClick={() => discardCard(card)}>
              Discard
            </button>
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
   
      <Link className="link box" to="/">Back to Home</Link>
    </div>
  );
}
