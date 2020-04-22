import React from "react";
import { Link } from "react-router-dom";
import "../src/css/about.css";
// import avatar from "./avatar"

export default function rules() {
  return (
    <div className="aboutContainer">
      <img className="avatar" src="/avatar/avatar.jpg" alt="avatar" />
      <p className="aboutText">
        Hiya, my name is Kris and this is my game project. I copied an existing
        physical game called Fantasy Realm. The gameplay mechanics are
        simplified but I plan on expanding them in the future as my knowledge
        and skill grow.
      </p>

      <Link className="link box" to="/">
        Back to Home
      </Link>
    </div>
  );
}
