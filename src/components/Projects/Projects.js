import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import covid from "../../Assets/Projects/covid.png";
import firebase from "../../Assets/Projects/firebase.png";
import resturant from "../../Assets/Projects/resturant.png";
import car from "../../Assets/Projects/car.png";
import Instagram from "../../Assets/Projects/instgram.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4}className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="Covid Tracker Where you can analyze the total cases and total deaths in certain country with the help of charts for analysis.Pie Chart and Line chart availble to view the data in a presentable form.Build using react.js mui and api to fetch data."
              ghLink="https://github.com/seharnazeer/Covid_tracker"
              demoLink="https://seharnazeer.github.io/Covid_tracker/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={firebase}
              isBlog={false}
              title="Resturant App"
              description="Front end build with react.js mui Aand firebase which provides  NoSQL,real-time hosting of databases.Features of that app google authentication,create an new item, fiter products according to category and you can also add to cart products."
              ghLink="https://github.com/seharnazeer/resturant_app_with_firebase"
              demoLink="https://restuarantapp-ce584.web.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Instagram}
              isBlog={false}
              title="Instagram"
              description="Instagram Clone using MERN technology.Features of app like-posts,unlike-posts,comments,delete-comments and chats are in real time.For real time communication we use web sockets.You can add posts,follow your friends,visit your friends profile,save posts.After following your friends you are able to chat with."
              // ghLink="https://instagram-clone-realtime.herokuapp.com/"
              demoLink="https://instagram-clone-realtime.herokuapp.com/"      
              // <--------Please include a demo link here 
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={resturant}
              isBlog={false}
              title="Resturant UI"
              description="UI of resturant app using react.js mui .You can add items to your cart and remove it any time.Attractive frontend design."
              ghLink="https://github.com/seharnazeer/Resturant_App"
              demoLink="http://resturant_app.surge.sh/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="An weather app where we fetch data about the weather of ther certain city using api.Frontend is also build using react.js and mui."
              ghLink="https://github.com/seharnazeer/Weather_App/tree/master"
              demoLink="https://seharnazeer.github.io/Weather_App/"
            />
          </Col>

           <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
            title="Simple Template"
              description="Simple ui one page website using react.js and mui.Attractive ui with MUI"
              ghLink="https://github.com/seharnazeer/landing-page-with-tailwindcss"
              demoLink="https://car-retail-94c41.web.app/" 
            />
          </Col> 


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
