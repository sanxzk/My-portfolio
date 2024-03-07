import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjana Sharma </span>
            from <span className="purple"> Kolkata, West Bengal, India.</span>
            <br />
            I am currently employed as a software developer engineering intern at Crystal Clear Services.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life has no <strong> ctrl+z</strong>"
          </p>
          <footer className="blockquote-footer">Sanjana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
