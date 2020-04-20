import React from "react";
import "../src/css/play.css";
import card from "./imgs/Earth-Elemental.png";
import deck from "./imgs/deck.png";

export default function play() {
  return (
    <div className="gameContainer">
      <section className="drawPile">
        <img src={deck} alt="card" />
      </section>

      <section className="discardPile">
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
      </section>

      <section className="playerHand">
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
        <img src={card} alt="card" />
      </section>
    </div>
  );
}
