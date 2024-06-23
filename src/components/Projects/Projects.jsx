import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import developer from "../../assets/developer.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={developer}
            isBlog={false}
            title="Demo"
            description=""
            demoLink=""
          />
        </Col>

     
      </Row>
    </Container>
  </Container>  )
}

export default Projects