import React, { useEffect, useRef, useState } from "react";
import HomePageTwo from "./HomePageTwo";
// import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import developer from "../../assets/developer.jpg";

const HomePage = () => {
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
          birdSize: 1.0,
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
    <section>
      <Container fluid className="home-section" id="home" ref={myRef}>
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ABI JOY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={developer}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", borderRadius: 20 }}
                />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomePageTwo />
    </section>
  );
};

export default HomePage;
