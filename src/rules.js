import React from "react";
import { Link } from "react-router-dom";
import "../src/css/rules.css";

export default function rules() {
  return (
    <div className="rulesContainer">
      <section className="rulesBox box">
        <h1>Rules</h1>
        <ul>
          <li>Start the game by drawing new hand.</li>
          <li>
            You can replace a card in your hand 5 times via the discard button.
          </li>
          <li>Try to replace the lowest value card.</li>
          <li>After 5 discards, you will see your final score.</li>
        </ul>
      </section>
      <Link className="link box" to="/">
        Back to Home
      </Link>
    </div>
  );
}
