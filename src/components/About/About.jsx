import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCard from './AboutCard'
import TechStacks from './TechStacks'
import ToolStacks from './ToolStacks'
import GitHub from './GitHub'
import developer from "../../assets/developer.jpg";


const About = () => {

 

  return (
    <Container fluid className="about-section">
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