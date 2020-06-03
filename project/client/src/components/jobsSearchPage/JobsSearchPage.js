import React from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import SortFilter from "./filterComponents/SortFilter";
import VerifyFilter from "./filterComponents/VerifyFilter";
import PaginationComponent from "./pagination/Pagination";
import "./JobsSearchPage.css";

import { pageSize } from "../../config/config";
import JobService from "../../services/Jobs.service";
import JobCardComponent from "../partials/jobCard/JobCard";

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
    const filters = this.state.currFilters;
    this.setState({
      jobsArr: JobService.getPage(pageNumber, pageSize, filters),
      currPage: pageNumber,
      maxPage: JobService.getPagesCount(pageSize, filters),
    });
    window.scrollTo(0, 0);
  };
  changeFilters = (filterName, value) => {
    const oldFilters = this.state.currFilters || {};
    oldFilters[filterName] = value;
    this.setState({
      currFilters: oldFilters,
    });
    this.renderPage();
  };
  render() {
    return (
      <>
        <aside className="jobs-search-page-filters">
          <SortFilter
            changeFilter={(value) => {
              this.changeFilters("sortBy", value);
            }}
            changeReverse={(value) => {
              this.changeFilters("reverse", value);
            }}
          />

          <VerifyFilter
            changeFilter={(value) => {
              this.changeFilters("filterBy", value);
            }}
          />
        </aside>

        <main className="jobs-search-page-body">
          {createMainPart(this.state.jobsArr)}

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

function createMainPart(jobsArr) {
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
  return createCards(jobsArr);
}

function createCards(jobsArr) {
  return (
    <>
      {jobsArr.map((job) => {
        return <JobCardComponent job={job} key={job.id} />;
      })}
    </>
  );
}
export default JobsSearchPage;
