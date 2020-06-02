import React from "react";

import {Nav, Modal, Card, Button } from "react-bootstrap";
import FavouritesService from "../../services/Favourites.service";

export default class FavouritesModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <>
        <Nav.Link href="" onClick={() => this.setState({ showModal: true })}>
          Favourites
        </Nav.Link>
        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Favourites
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {createCards(FavouritesService.getAll(), () =>
              this.setState({ rerender: true })
            )}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

function createCards(jobsArr, rerender) {
  if (!jobsArr.length) {
    return <p>It seem's you have no favourite offers</p>;
  }
  return jobsArr.map((job) => (
    <Card className="w-90" key={job.id}>
      <Card.Header as="h5">
        {job.name}
        {/* <Link to={`/jobs/${job.id}`}>{job.name}</Link> */}
      </Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <ul>
          <li>Country: {job.info.country || "Not assigned"}</li>
          <li>Salary: {job.info.salary || "Not assigned"}</li>
          <li>Employer rating:{job.info.employerRating || "Not assigned"}</li>
        </ul>
        <Button
          variant="danger"
          onClick={() => {
            FavouritesService.delete(job.id);
            rerender();
          }}
        >
          Remove from favourite
        </Button>
      </Card.Body>
    </Card>
  ));
}
