import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import SortFilter from "./filterComponents/SortFilter";
import PaginationComponent from "./pagination/Pagination";
import "./JobsSearchPage.css";
import { Link } from "react-router-dom";

import { pageSize } from "../../config/config";
import JobService from "../../services/Jobs.service";

class JobsSearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobsArr: null,
      currPage: 1,
      currFilters: null,
    };
  }
  componentDidMount() {
    JobService.loadJobs().then((res) => {
      this.renderPage();
    });
  }

  renderPage = (pageNumber = 1) => {
    console.log(`Rendering page ${pageNumber}`);
    const filters = this.state.currFilters;
    this.setState({
      jobsArr: JobService.getPage(pageNumber, pageSize, filters),
      currPage: pageNumber,
      maxPage: JobService.getPagesCount(pageSize, filters),
    });
  };

  render() {
    console.log("rendering component")
    return (
      <>
        <aside className="jobs-search-page-filters">
          <SortFilter
            changeFilter={(value) => {
              const oldFilters = this.state.currFilters || {};
              oldFilters.sortBy = value;
              this.setState({
                currFilters: oldFilters,
              });
              this.renderPage();
            }}
          />
        </aside>
        <main className="jobs-search-page-body">
          {createCards(this.state.jobsArr)}
          <PaginationComponent
            currPage={this.state.currPage}
            maxPage={this.state.maxPage}
            renderPage={this.renderPage}
          />
        </main>
      </>
    );
  }
}

function createCards(jobsArr) {
  if (!jobsArr) {
    return (
      <Card className="w-90 jobs-search-page-loader">
        <Card.Body>
          <Spinner animation="border" role="status" variant="secondary" />
          <p>Loading...</p>
        </Card.Body>
      </Card>
    );
  }
  if (!jobsArr.length) {
    return (
      <Card className="w-90 jobs-search-page-loader">
        <Card.Body>
          <Card.Text>No jobs found!</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <>
      {jobsArr.map((job) => {
        return (
          <Card className="w-90" key={job.id}>
            <Card.Header as="h5">
              <Link to={`/jobs/${job.id}`}>{job.name}</Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <ul>
                <li>Country: {job.info.country || "Not assigned"}</li>
                <li>Salary: {job.info.salary || "Not assigned"}</li>
                <li>
                  Employer rating:{job.info.employerRating || "Not assigned"}
                </li>
              </ul>
              <Button variant="secondary">Add to favourite</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default JobsSearchPage;
