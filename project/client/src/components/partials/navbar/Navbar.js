import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Work</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/jobs">Find job</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>

    );
  }
}

export default NavbarComponent;