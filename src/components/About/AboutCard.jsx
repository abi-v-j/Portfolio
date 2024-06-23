
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


const AboutCard = () => {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Abi Joy </span>
          from <span className="purple"> Kerala, India.</span>
          <br />
          I am currently employed as a software developer at <br/> Progressive Software Solutions And Training.
          <br />
          I have completed  Bachelor of Computer Application at MGU
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Writing Tech Blogs
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)" }}>
          "Where there's a will, there's a way"{" "}
        </p>
      </blockquote>
    </Card.Body>
  </Card>
  )
}

export default AboutCard


