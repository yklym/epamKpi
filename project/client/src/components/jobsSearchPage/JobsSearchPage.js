import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BasicFilter } from "./filterComponents/basicFilter";
import PaginationComponent from "./pagination/Pagination";
import "./JobsSearchPage.css";
import { Link } from "react-router-dom";

class JobsSearchPage extends React.Component {
  cards = [
    { name: "job", body: "ASDSD", params: { country: "-", salary: "-" } },
  ];

  render() {
    return (
      <>
        <aside className="jobs-search-page-filters">
          <BasicFilter />
        </aside>
        <main className="jobs-search-page-body">
          {createCards(this.cards)}
          <PaginationComponent />
        </main>
      </>
    );
  }
}

function createCards(jobsArr) {
  return (
    <>
      {jobsArr.map((job) => {
        return (
          <Card className="w-90">
            <Card.Header as="h5"><Link to={`/jobs/${job.id}`}>{job.name}</Link></Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default JobsSearchPage;
