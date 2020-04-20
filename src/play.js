import React from "react";
import "../src/css/play.css";

export default function play() {
  return (
    <div className="gameContainer">
      <section className="drawPile">
        <div>Draw pile</div>
      </section>

      <section className="discardPile">
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        
      </section>

      <section className="playerHand">
      <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
        <div className="card box">Card</div>
      </section>
    </div>
  );
}
