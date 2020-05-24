import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class NavComponent extends React.Component {
  render() {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/">Some link</Link>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default NavComponent;
