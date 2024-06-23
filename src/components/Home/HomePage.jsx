import React, { useEffect, useRef, useState } from "react";
import HomePageTwo from "./HomePageTwo";
// import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import developer from "../../assets/developer.jpg";

const HomePage = () => {
  

  return (
    <section>
      <Container fluid className="home-section" id="home">
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
