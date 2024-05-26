// Projects.js
// File name: Projects.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import styled from "styled-components";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/passwordGenerator.png";
import project5 from "../assets/comingSoon_MacView.png";

/* ================================
   Styled Components
   ================================ */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  padding: 2rem;
  text-align: center;

  font-family: "Reddit Mono";

  @font-face {
    font-family: "Reddit Mono";
    src: url(../fonts/RedditMono-VariableFont_wght.ttf);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProjectCard = styled.a`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

/* ================================
     Render Components
     ================================ */

function Projects() {
  /* ================================
     Render JSX
     ================================ */
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Title data-aos="fade-down">My Projects</Title>
      <ProjectsContainer data-aos="fade-up">
        <ProjectCard
          href="https://disneyclone-a864c.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={project1} alt="Project 1" />
          <ProjectInfo>
            <ProjectTitle>Disney Clone</ProjectTitle>
            <ProjectDescription>
              A Disney-inspired app that uses Firebase authentication, TMDB API
              for movie categories, and Redux for state management. It features
              a React player for trailer viewing and allows users to add movies
              to a watchlist.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard
          href="https://cloudhive.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={project2} alt="Project 2" />
          <ProjectInfo>
            <ProjectTitle>CloudHive</ProjectTitle>
            <ProjectDescription>
              A cloud-hosting website landing page built with Tailwind CSS for
              styling and React Router DOM for seamless navigation.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard
          href="https://clone-tesla-site.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={project3} alt="Project 3" />
          <ProjectInfo>
            <ProjectTitle>Tesla Clone</ProjectTitle>
            <ProjectDescription>
              A website inspired by Tesla design and branding, built with modern
              technologies including Redux for state management and Styled
              Components for CSS styling.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard
          href="https://password-generator-adeyemi149.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src={project4} alt="Project 4" />
          <ProjectInfo>
            <ProjectTitle>Password Generator</ProjectTitle>
            <ProjectDescription>
              A password generator that helps me generate unique random
              passwords. To use with Signing up or registering to any
              application/sites.
            </ProjectDescription>
          </ProjectInfo>
        </ProjectCard>
        <ProjectCard href="" target="_blank" rel="noopener noreferrer">
          <ProjectImage src={project5} alt="Project 4" />
          <ProjectInfo>
            <ProjectTitle>Workbench</ProjectTitle>
            <ProjectDescription></ProjectDescription>
          </ProjectInfo>
        </ProjectCard>
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
