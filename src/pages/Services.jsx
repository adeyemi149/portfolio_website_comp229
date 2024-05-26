// Services.js
// File name: Services.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import styled from "styled-components";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import JsIcon from "../assets/svgs/JsIcon";
import TsIcon from "../assets/svgs/TsIcon";
import HtmlIcon from "../assets/svgs/HtmlIcon";
import { CssIcon } from "../assets/svgs/CssIcon";
import CSharpIcon from "../assets/svgs/CSharpIcon";
import JavaIcon from "../assets/svgs/JavaIcon";
import ReactIcon from "../assets/svgs/ReactIcon";
import NextJsIcon from "../assets/svgs/NextJsIcon";
import FigmaIcon from "../assets/svgs/FigmaIcon";

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

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Tech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

/* ================================
     Render Components
     ================================ */

function Services() {
  /* ================================
     Render JSX
     ================================ */
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Title data-aos="fade-up-right">My Services</Title>
      <ServicesContainer data-aos="fade-up-left">
        <ServiceCard>
          <IconWrapper>
            <FaCode />
          </IconWrapper>
          <ServiceTitle>General Programming</ServiceTitle>
          <ServiceDescription>
            Custom programming solutions tailored to your needs.
          </ServiceDescription>
          <Tech>
            <JsIcon />
            <TsIcon />
            <CSharpIcon />
            <JavaIcon />
          </Tech>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            Building responsive and modern websites.
          </ServiceDescription>
          <Tech>
            <HtmlIcon />
            <CssIcon />
            <ReactIcon />
            <NextJsIcon />
          </Tech>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <FaPaintBrush />
          </IconWrapper>
          <ServiceTitle>UI/UX</ServiceTitle>
          <ServiceDescription>
            Developing user-friendly mobile applications.
          </ServiceDescription>
          <Tech>
            <FigmaIcon />
          </Tech>
        </ServiceCard>
      </ServicesContainer>
    </Container>
  );
}

export default Services;
