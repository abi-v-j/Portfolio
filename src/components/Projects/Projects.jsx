import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import QRCode from '../../assets/QRCode.png'
import FAQ from '../../assets/FAQ.png'

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
            imgPath={QRCode}
            isBlog={false}
            title="QR Code Generator"
            description="it's a simple QR code generator."
            demoLink="https://qrcode-psi-nine.vercel.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={FAQ}
            isBlog={false}
            title="Frequently Asked Questions"
            description="it is a simple FAQ ."
            demoLink="https://frequently-asked-questions-alpha.vercel.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={QRCode}
            isBlog={false}
            title="QR Code Generator"
            description="it's a simple QR code generator."
            demoLink="https://qrcode-psi-nine.vercel.app/"
          />
        </Col>

     
      </Row>
    </Container>
  </Container>  )
}

export default Projects