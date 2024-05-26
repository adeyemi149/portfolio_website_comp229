// Home.js
// File name: Home.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import styled from "styled-components";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/* ================================
   Styled Components
   ================================ */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f9;
  padding: 2rem;
  text-align: center;
  font-family: "Reddit Mono";

  @font-face {
    font-family: "Reddit Mono";
    src: url(../public/fonts/RedditMono-VariableFont_wght.ttf);
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const MissionStatement = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Button = styled(Link)`
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

const ExternalLink = styled.a`
  background-color: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
/* ================================
     Render Component
     ================================ */

function Home() {
  /* ================================
     Render JSX
     ================================ */

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <TextSection>
        <WelcomeMessage data-aos="fade-right">
          Welcome to My Website!
        </WelcomeMessage>
        <MissionStatement>
          If you have a project or job opportunity that requires knowledge in
          software engineering, I would be delighted to hear from you. I am
          always eager to connect with like-minded individuals who share my
          enthusiasm for using technology to make a difference.
        </MissionStatement>
      </TextSection>

      <ButtonContainer>
        <Button to="/about">About Me</Button>
        <ExternalLink href="https://crownyemi.vercel.app/" target="_blank">
          My Other Portfolio
        </ExternalLink>
      </ButtonContainer>
    </Container>
  );
}

export default Home;
