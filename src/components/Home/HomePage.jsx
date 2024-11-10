import React, { useEffect, useRef } from "react";
import HomePageTwo from "./HomePageTwo";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import developer from "../../assets/developer.jpg";
import gsap from "gsap";

// Custom HomePage Component
const HomePage = () => {
  // Refs for animations
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const typeRef = useRef(null);
  const waveRef = useRef(null);

  // Helper function to split text into individual characters
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Animated gradient background
  

    // Bouncing wave emoji
    tl.fromTo(
      waveRef.current,
      { rotation: -20, scale: 0.9 },
      { rotation: 20, scale: 1.1, yoyo: true, repeat: -1, duration: 1 }
    );

    // Staggered bounce-in effect for greeting text
    tl.from(".char", {
      opacity: 0,
      y: -100,
      stagger: 0.1,
      scale: 1.5,
      ease: "bounce.out",
      color: "#3498db",
    });

    // Parallax effect for the image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Pop-in animation for Type component
    tl.fromTo(
      typeRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Fade and slide-up effect for HomePageTwo section
    tl.from(".home-section-two", { opacity: 0, y: 50, duration: 1 }, "-=1");
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          {/* Floating particles */}
          <div className="floating-particles"></div>
          
          <Row>
            <Col md={7} className="home-header">
              <h1 ref={greetingRef} style={{ paddingBottom: 15 }} className="heading">
                {splitText("Hi There!")}{" "}
                <span ref={waveRef} className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 ref={nameRef} className="heading-name">
                {splitText("I'M ABI JOY")}
              </h1>

              <div ref={typeRef} style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                ref={imageRef}
                src={developer}
                alt="home pic"
                className="img-fluid image-hover"
                style={{ maxHeight: "450px", borderRadius: 20 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="home-section-two">
        <HomePageTwo />
      </div>
    </section>
  );
};

export default HomePage;
