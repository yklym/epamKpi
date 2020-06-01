import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import SortFilter  from "./filterComponents/SortFilter";
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
      currFilters: {},
    };
  }
  componentWillMount() {
    JobService.loadJobs().then((res) => {
      this.setState({
        jobsArr: JobService.getPage(1, pageSize),
        maxPage: JobService.getPagesCount(pageSize),
      });
    });
  }

  renderPage = (pageNumber) => {
    console.log(`Rendering page ${pageNumber}`);
    const filters = this.state.currFilters;
    this.setState({
      jobsArr: JobService.getPage(pageNumber, pageSize, filters),
      currPage: pageNumber,
    });
  };

  render() {
    console.log(this.state)
    return (
      <>
        <aside className="jobs-search-page-filters">
          <SortFilter
            changeFilter={(value) => {
              this.setState({ currFilters: { ...this.state.currFilters, "sortBy": value } });
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
          <Card.Text>
            <Spinner animation="border" role="status" variant="secondary" />
            <p>Loading...</p>
          </Card.Text>
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
              <Card.Text>
                <ul>
        <li>Country: {job.info.country || "Not assigned"}</li>
        <li>Salary: {job.info.salary || "Not assigned"}</li>
        <li>Employer rating:{job.info.employer.rating || "Not assigned"}</li>
                </ul>
              </Card.Text>
              <Button variant="secondary">Add to favourite</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default JobsSearchPage;
