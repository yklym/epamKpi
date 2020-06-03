import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

class NavComponent extends React.Component {
  render() {
    return (
      <ListGroup variant="flush" className="main-page-nav">
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
