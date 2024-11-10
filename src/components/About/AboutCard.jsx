import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

const AboutCard = () => {
  const aboutText = [
    "Hi Everyone, I am <span className='purple'>Abi Joy</span> from <span className='purple'>Kerala, India.</span>",
    "I am currently employed as a software developer at Progressive Software Solutions And Training.",
    "I have completed Bachelor of Computer Application at MGU",
    "Apart from coding, some other activities that I love to do!",
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {aboutText.map((text, index) => (
            <motion.p
              key={index}
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: text }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            />
          ))}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["Playing Games", "Writing Tech Blogs", "Travelling"].map(
              (activity, index) => (
                <motion.li
                  key={index}
                  className="about-activity"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 * index }}
                >
                  <ImPointRight /> {activity}
                </motion.li>
              )
            )}
          </motion.ul>

          <motion.p
            style={{ color: "rgb(155 126 172)", marginTop: "1em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            "Where there's a will, there's a way"
          </motion.p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
