import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  const aboutText = [
    "Hi Everyone, I am <span className='purple'>Abi Joy </span> from <span className='purple'> Kerala, India.</span>",
    "I am currently employed as a software developer at Progressive Software Solutions And Training.",
    "I have completed Bachelor of Computer Application at MGU",
    "",
    "Apart from coding, some other activities that I love to do!"
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {aboutText.map((text, index) => (
            <p key={index} style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
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
  );
};

export default AboutCard;