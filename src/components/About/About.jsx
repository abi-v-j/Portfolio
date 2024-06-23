import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCard from './AboutCard'
import TechStacks from './TechStacks'
import ToolStacks from './ToolStacks'
import GitHub from './GitHub'
import developer from "../../assets/developer.jpg";


const About = () => {

  const myRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      // Load Three.js
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
      document.body.appendChild(threeScript);

      // Load Vanta.js
      const vantaScript = document.createElement("script");
      vantaScript.src =
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
      document.body.appendChild(vantaScript);

      // Wait for scripts to load
      await new Promise((resolve) => {
        vantaScript.onload = resolve;
      });

      // Initialize Vanta effect
      if (window.VANTA) {
        effectRef.current = window.VANTA.BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          colorMode: "lerpGradient",
          birdSize: 0.2,
        });
      }
    };
  
    loadScripts();
  
    // Cleanup function
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
      }
    };
  }, []);

  return (
    <Container fluid className="about-section" ref={myRef}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={developer} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechStacks />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStacks />

        <GitHub />
      </Container>
    </Container>
  )
}

export default About