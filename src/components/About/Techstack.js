import React ,{useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {

  return (
    <Row className="tech-div"  style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus className="techstack-icons"/>

      </Col> */}
      {/* <Col xs={12} > */}

      <Col  xs={6} md={4} lg={3}className="tech-icons">
        <DiNodejs className="techstack-icons"/>
      </Col>
      
    
      <Col  xs={6} md={4} lg={3}className="tech-icons">
        <DiReact className="techstack-icons"/>
      </Col>
      
    
      <Col xs={6} md={4} className="tech-icons">
        <DiMongodb className="techstack-icons"/>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
    
      <Col  xs={6} md={4} className="tech-icons">
        <DiGit className="techstack-icons"/>
      </Col>
      
      <Col xs={6} md={4} className="tech-icons">
        <SiFirebase className="techstack-icons"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
      {/* </Col> */}
    </Row>
  );
}

export default Techstack;
