import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/nav__logo.png"
import './Header.css'

const Header = () => {
  return (
    <Navbar className="nab-background" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto py-2">
            <Nav.Link className="mx-3 nav-text" href="#">Home</Nav.Link>
            <Nav.Link className="mx-3 nav-text" href="#">How we help</Nav.Link>
            <Nav.Link className="mx-3 nav-text" href="#">Programs</Nav.Link>
            <Nav.Link className="mx-3 nav-text" href="#">FAQS</Nav.Link>
            <Nav.Link href="#" className="touch-style">
              Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
