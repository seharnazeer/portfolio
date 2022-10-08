import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hey there, I am <span className="purple">Sehar Nazeer</span>
            {/* from <span className="purple">Punjab, Pakistan.</span> */}
            <br />I'm a Full Stack (MERN) Developer who has strong knowledge of UI/UX, Server Architecture, Database (NoSQL) Systems and serverless architecture
            <br />
            I'm a result oriented developer who believes in smart work.I have provided solution to many businesses to grow their business.
            <br />
            I write the code which is realiable, easilly scalable and well commented.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching and Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Tech innovations
            </li>
          </ul>

          <p style={{ color: "white" }}>
            <i>"If debugging is the process of removing software bugs, then programming must be the process of putting them in"</i>{" "}
          </p>
          <footer className="blockquote-footer">Edsger Dijkstra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
