import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bharath Kumar</span> from{" "}
            <span className="purple">Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer
            Science and Engineering at Hindustan Institute of Technology and
            Science, Chennai.
          </p>

          <p>Apart from coding, some other activities that I love to do!</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Bharath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
