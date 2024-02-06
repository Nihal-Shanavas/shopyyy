import React from "react";
import "./header.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <div className="mainNav">
      <Container>
        <div className="mainHead">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="logo">
              <img
                src="https://i.postimg.cc/j5smMRwL/img1-removebg-preview.png"
                alt=""
              />
              <h2>hopyy</h2>
            </div>
          </Link>

          <Nav className="ms-auto">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <ScrollLink to="aboutUs" smooth={true} duration={500}>
              <Nav.Link>About Us</Nav.Link>
            </ScrollLink>
          </Nav>
        </div>
      </Container>
    </div>
  );
}

export default Header;
