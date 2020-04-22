import React from "react";
import { Link } from "react-router-dom";
import "../src/css/landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function landingPage() {
  return (
    <div className="container">
      <header className="box">
        <h1>Fantasy Realms</h1>
      </header>

      <section className="play box">
        <Link className="link" to="/play">
          Play
        </Link>
      </section>

      <section className="rules box">
        <Link className="link" to="/rules">
          Rules
        </Link>
      </section>

      <section className="about box">
        <Link className="link" to="/about">
          About this project
        </Link>
      </section>

      <footer className="box">
        Made by Krzysztof Kozak{" "}
        <a
          href="https://www.linkedin.com/in/kriskozak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="linkedIn" icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Kris-c0der/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="linkedIn" icon={faGithub} />
        </a>
      </footer>
    </div>
  );
}
