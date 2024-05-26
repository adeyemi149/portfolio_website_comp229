// Contact.js
// File name: Contact.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

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

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

/* ================================
   React Component
   ================================ */

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  /* ================================
     Event Handlers
     ================================ */

  //Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Redirect to Home page after form submission
    navigate("/");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  /* ================================
     Render JSX
     ================================ */

  return (
    <Container>
      <Title data-aos="fade-right">Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></Textarea>
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contacts;
