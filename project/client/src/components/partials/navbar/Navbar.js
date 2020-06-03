import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import FavouritesModal from "../../favouritesModal/FavouritesModal";

import "./Navbar.css";
class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" id="navbar">
        <Navbar.Brand href="/">Work</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/jobs">Find job</Nav.Link>
          <Nav.Link href="#nowhereg">Articles</Nav.Link>
        </Nav>
        <Nav>
          <FavouritesModal />
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComponent;
