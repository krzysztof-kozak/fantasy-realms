import React from "react";
import { Link } from "react-router-dom";
import "../src/css/about.css";

export default function rules() {
  return (
    <div className="aboutContainer">
      <div className="wrapper">
        <img
          className="avatar box"
          src="./avatar/avatar.jpg"
          alt="avatar"
        />
        <p className="aboutText box">
          Hiya, my name is Kris and this is my game project. I copied an
          existing physical game called Fantasy Realms. The gameplay mechanics
          are simplified but I plan on expanding them in the future as my
          knowledge and skill grow.........
        </p>
      </div>

      <Link className="link box" to="/">
        Back to Home
      </Link>
    </div>
  );
}
