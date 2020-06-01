import React from "react";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import MapComponent from "./map/LocationMap";
import GalleryComponent from "./gallery/Gallery";
import JobService from "../../services/Jobs.service";

import "./JobPage.css";

class JobPage extends React.Component {
  constructor(props) {
    super(props);

    let queryStrArr = this.props.location.pathname.split("/");
    let jobId = queryStrArr[queryStrArr.length - 1];

    this.state = {
      job: null,
      jobId: jobId,
    };
  }

  componentDidMount() {
    JobService.loadJobById(this.state.jobId).then((res) =>
      this.setState({ job: res })
    );
  }

  render() {
    const { job } = this.state;
    if (!job) {
      return (
        <main className="job-page-body loader">
          <Spinner animation="border" role="status" variant="secondary" />
          <p>Loading...</p>
        </main>
      );
    }
    if (job.err) {
      // Page 404
    }

    return (
      <main className="job-page-body">
        {/* job name */}
        <h3>{this.state.job.name}</h3>
        <section className="job-page-description">
          <div className="text-wrapper">
            <h4>Description:</h4>

            <p>{this.state.job.description || "No description for this job"}</p>
          </div>
          <div className="img-wrapper">
            <h5>Country:</h5>
            {/* Todo implement image templator*/}
            <img
              src={require("./../../assets/flags/poland.png")}
              alt="country flag"
            ></img>
          </div>
        </section>

        <section>
          <h4>Gallery:</h4>
          <GalleryComponent images={this.state.job.images || []} />
        </section>

        <section className="job-page-details">
          <h4>Job Details:</h4>
          <div className="table-wrapper">
            <table className="table table-hover table-sm">
              <tbody>
                <tr>
                  <td>Country</td>
                  <td>{job.info.country || "No info"}</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td>{job.info.salary || "No info"}</td>
                </tr>
                <tr>
                  <td>Employer rating:</td>
                  <td>{job.info.employerRating || "No info"}</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-hover table-sm">
              <tbody>
                <tr>
                  <td>Period</td>
                  <td>{job.info.period || "No info"}</td>
                </tr>

                <tr>
                  <td>Work Amount</td>
                  <td>{job.info.workPerDay || "No info"}</td>
                </tr>
                <tr>
                  <td>Holidays Amount</td>
                  <td>{job.info.holidaysAmount || "No info"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="job-page-location">
          <div id="map-wrapper">
            <MapComponent xCord={job.location.xCord || 44.7} yCord={job.location.yCord || 44.7} />
          </div>
          <div className="text-wrapper">
            <h4>Location:</h4>
            <p>SOme address description</p>
            <hr />
            <br />
            <h4>Interested in this offer?</h4>

            <Button className="btn-secondary">Add to interested!</Button>
          </div>
        </section>
      </main>
    );
  }
}

export default JobPage;
