import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
const NavBar = () => (
  <Navbar
  id='Navbar'
    expand="lg"
    className="bg-body-tertiary mb-3"
    bg="dark"
    data-bs-theme="dark"
  >
    <Container fluid>
      <Navbar.Brand href="#"> <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/weather-3260422-2725115.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link to='/' className="nav-link fw-bold me-5 ms-3">
         SkyChannel
          </Link>
          <Link href='#Footer' className="nav-link fw-bold ms-3 me-5">
          About
          </Link>
          <Link to='/Details' className="nav-link fw-bold ms-3">
          Forecasts
          </Link>
        </Nav>
      </Navbar.Collapse>
      <img
              src="https://iconape.com/wp-content/files/jc/338838/png/338838.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
    </Container>
  </Navbar>
)

export default NavBar
