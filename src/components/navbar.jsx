// Navbar.js
// File name: Navbar.js
// Student's Name: Adeyemi Alimi
// Student ID: 301374506
// Date: 25-05-2024

import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/Portfolio_icon.png";

/* ================================
   Styled Components
   ================================ */

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  font-family: "Reddit Mono";

  @font-face {
    font-family: "Reddit Mono";
    src: url(../public/fonts/RedditMono-VariableFont_wght.ttf);
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 2rem;
`;

const NavItem = styled.li`
  margin-left: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #ff70c4;
  }
`;

/* ================================
   React Component
   ================================ */

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
