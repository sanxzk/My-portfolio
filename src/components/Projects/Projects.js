import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notesKey from "../../Assets/Projects/noteskey.png";

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
              imgPath={notesKey}
              isBlog={false}
              title="NotesKey"
              description="A today's time task management application, where you can add your daily tasks and arrange them by priority and deadlines."
              ghLink="https://github.com/sanxzk/Task-Management-application"
              demoLink="https://task-management-application-ashy.vercel.app/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
