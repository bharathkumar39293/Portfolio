import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  jobsboard from "../../Assets/Projects/jobsboard.png";
import veggie from "../../Assets/Projects/veggie.jpg";
import youtube from "../../Assets/Projects/youtube.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobsboard}
              isBlog={false}
              title="Jobs-board"
              description="Developed a job listing platform with search and filter functionality for job titles
Implemented user authentication with JWT and dynamic search filters using React.js
Ensured a seamless user experience with state management, routing, and local storage"
              ghLink="https://github.com/bharathkumar39293/jobsearch"
              demoLink="https://jobsboard.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veggie}
              isBlog={false}
              title="Bulk veggie basket"
              description="Bulk veggie basket is a full-stack web platform that connects bulk vegetable buyers directly with
suppliers Ensured a seamless user experience with state management, routing, and local storage"
              ghLink="https://github.com/bharathkumar39293/Agrofix-webapp"
              demoLink="https://agrofix-frontend-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Nxt Watch"
              description="Implemented Nxt Watch application which is a clone for YouTube where users can login and can see a
list of videos like Trending, Gaming, Saved videos
 Implemented Dark Mode toggle and interactive UI using React Context API"
              ghLink="https://github.com/bharathkumar39293/NxtWatch"
              demoLink="https://bharathtube.ccbp.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;