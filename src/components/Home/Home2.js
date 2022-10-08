import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home2 from "../../Assets/home2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiTwotoneMail
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have deep passion in web development and problem solving 🤷‍♂️
               <i>
                <b className="purple">Enthusiastic and driven</b>
              </i>
              {/* <br /> */}
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and its frameworks (React,Nodejs) </b>
              </i>
              <br />
              <br />
              Through years of pratice and many personal projects.I honed&nbsp;
              <i>
                <b className="purple">my skills as a programmer.</b>
                <br/>
                As i am mostly{" "}
                <b className="purple">
                  Self-Learner,
                </b>
              </i>
              {/* <br />
              <br /> */}
              I can adopt new techhnologies very easily and always ready to take on a challenges.
              <br/>
               <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Express.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={home2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/seharnazeer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="mailto:seharn314@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
