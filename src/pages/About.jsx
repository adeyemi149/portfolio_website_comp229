// About.js
// File name: About.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import styled from "styled-components";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import profileimg from "../assets/My_img.jpeg";
import resume from "../assets/Resume.pdf";

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
    src: url(../public/fonts/RedditMono-VariableFont_wght.ttf);
  }
`;

const Image = styled.img`
  margin-bottom: 2rem;
  width: 50%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Bio = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
`;

const ResumeLink = styled.a`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

/* ================================
   React Component
   ================================ */
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <Image src={profileimg} alt="John Doe" data-aos="fade-down" />
      <div data-aos="fade-up">
        <Bio>
          Greetings! My name is Alimi Adeyemi, and I am a dedicated software
          engineer with a passion for creating exceptional products using
          cutting-edge web technologies harnessing the power of technology to
          deliver innovative solutions.
        </Bio>
        <ResumeLink href={resume} target="_blank" rel="noopener noreferrer">
          View My Resume
        </ResumeLink>
      </div>
    </Container>
  );
}

export default About;
