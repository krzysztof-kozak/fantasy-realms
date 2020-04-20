import React from "react";
import "../src/css/play.css";
import card from "./imgs/Earth-Elemental.png";
import deck from "./imgs/deck.png";

export default function play() {
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}
