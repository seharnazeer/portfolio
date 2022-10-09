import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";


function Toolstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos-offset="100" >
      <Col xs={4} md={4} lg={5}className="tech-icons">
        <SiLinux className="toolstack-icons" />
      </Col>
      <Col xs={4} md={4} lg={5}className="tech-icons">
        <SiVisualstudiocode className="toolstack-icons" />
      </Col>
      <Col xs={4} md={4} lg={5}className="tech-icons">
        <SiPostman className="toolstack-icons" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
