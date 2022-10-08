import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import {Animate} from "../Animate"


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={about} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Animate>
        <Techstack />
        </Animate>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Animate transition={{delay:.3}}>
        <Toolstack />
        </Animate>

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
