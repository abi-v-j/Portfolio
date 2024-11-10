import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import TechStacks from "./TechStacks";
import ToolStacks from "./ToolStacks";
import GitHub from "./GitHub";
import developer from "../../assets/developer.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const skillsetRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current.children, {
      opacity: 0,
      y: -30,
      duration: 1.6,
      ease: "power3.out",
      delay: 1.4,
      stagger: 0.2, // Stagger effect for each line of text
    });
  }, []);

  return (
    <Container fluid className="about-section" style={styles.container}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={styles.textCol}>
            <motion.h1
              ref={headingRef}
              style={styles.heading}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span style={styles.headingSpan}>Know</span> 
              <span style={styles.headingSpan}>Who</span>
              <span style={styles.headingSpan}>
                <strong className="purple">I'M</strong>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <AboutCard />
            </motion.div>
          </Col>

          <Col md={5} style={styles.imageContainer}>
            <motion.img
              src={developer}
              alt="about"
              className="img-fluid"
              style={styles.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1.4 }}
            />
          </Col>
        </Row>

        <motion.h1
          ref={skillsetRef}
          className="project-heading"
          style={styles.sectionHeading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional <strong className="purple">Skillset</strong>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TechStacks />
        </motion.div>

        <motion.h1
          ref={toolsRef}
          className="project-heading"
          style={styles.sectionHeading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong className="purple">Tools</strong> I use
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ToolStacks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <GitHub />
        </motion.div>
      </Container>
    </Container>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    padding: "50px 0",
  },
  heading: {
    fontSize: "2.5em",
    paddingBottom: "20px",
    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
    WebkitBackgroundClip: "text",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.2",
  },
  headingSpan: {
    display: "inline-block",
    marginBottom: "15px",
    marginLeft: "10px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  textCol: {
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "50px",
  },
  imageContainer: {
    paddingTop: "10px",
    paddingBottom: "50px",
    textAlign: "center",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  },
  image: {
    borderRadius: "10px",
    transition: "transform 0.3s ease, filter 0.3s ease",
    filter: "grayscale(20%)",
  },
  sectionHeading: {
    fontSize: "1.8em",
    margin: "40px 0 20px",
    color: "#333",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
};

export default About;
