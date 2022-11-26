import React from "react";
import {
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Logout(){
    cookies.remove('_s');
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" bg="light" variant="dark" expand="lg" id="navbar">
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href=""><h5>Dasansor S.A.S</h5></Nav.Link>
              <Nav.Link href="index"><h5>Inicio</h5></Nav.Link>
              <Nav.Link href="servicios"><h5>Servicios</h5></Nav.Link>
              <Nav.Link href="contacto"><h5>Contacto</h5></Nav.Link>
              <Nav.Link href="login"><h5>Login</h5></Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header>
                <Row>
                  <FontAwesomeIcon icon={faUserDoctor} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.Logout()}>Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

