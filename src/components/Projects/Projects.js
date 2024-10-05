import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notesKey from "../../Assets/Projects/NotesKeyProject.png";
import BawarchikhanaProject from "../../Assets/Projects/BawarchikhanaProject.png"
import YoutubeProject from "../../Assets/Projects/YoutubeProject.png"

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
              description="NotesKey is a feature-rich day planner that helps users organize tasks by creating, reading, updating, deleting, marking tasks as complete, and sorting by priority or deadline. It utilizes React.js for the UI, Redux for state management, Express.js for the backend, and MongoDB for the database"
              ghLink="https://github.com/sanxzk/Task-Management-application"
              demoLink="https://task-management-application-ashy.vercel.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BawarchikhanaProject}
              isBlog={false}
              title="Bawarchi Khana"
              description="This application allows users to explore and search recipes by categories or keywords. Built with React.js and Redux for state management, it integrates FreeMealDb’s API for recipe data. Users can view category-wise recipes, get random recipes, search by keyword, and save/unsave their favorite recipes using local storage. The design is fully responsive and user-friendly, ensuring an engaging experience across all devices."
              ghLink="https://github.com/sanxzk/BawarchiKhanna"
              demoLink="https://bawarchi-khanna.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YoutubeProject}
              isBlog={false}
              title="Youtube Analyser"
              description="This app lets users view statistics like likes, comments, subscribers, views, and estimated earnings for any YouTube video by providing its link. Built with React.js, Redux, and Express.js, it uses YouTube's Data API for analytics and includes a callback request feature, sending admin notifications via email using Nodemailer."
              ghLink="https://github.com/sanxzk/Youtube_analyser"
              demoLink="https://youtube-analyser-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
