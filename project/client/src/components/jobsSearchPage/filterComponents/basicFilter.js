import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export class BasicFilter extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {"Basic Filters"}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Filters Here</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
