import React from "react";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import MapComponent from "./map/LocationMap";
import GalleryComponent from "./gallery/Gallery";
import JobService from "../../services/Jobs.service";
import FavouritesService from "../../services/Favourites.service";
import NotFoundPage from "../partials/errPage/notFoundPage";
import "./JobPage.css";

class JobPage extends React.Component {
  constructor(props) {
    super(props);

    let queryStrArr = this.props.location.pathname.split("/");
    let jobId = queryStrArr[queryStrArr.length - 1];

    this.state = {
      job: null,
      jobId: jobId,
      isFavourite: FavouritesService.check(jobId),
    };
    console.log("Checking if is fav");
    console.log(FavouritesService.check(jobId));
    console.log(FavouritesService.getAll());
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
      return <NotFoundPage />;
    }

    return (
      <main className="job-page-body">
        <h3>
          {this.state.job.name}
          {this.state.isFavourite ? (
            <span className="badge badge-danger">Favourite</span>
          ) : (
            ""
          )}
        </h3>
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

        <section className="job-page-gallery">
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
            <MapComponent
              xCord={job.location.xCord || 44.7}
              yCord={job.location.yCord || 44.7}
            />
          </div>
          <div className="text-wrapper">
            <h4>Location:</h4>
            <p>SOme address description</p>
            <hr />
            <br />

            {this.state.isFavourite ? (
              <>
                <h4>You are interested in this offer</h4>
                <Button
                  variant="danger"
                  onClick={() => {
                    FavouritesService.delete(job.id);
                    this.setState({ isFavourite: false });
                  }}
                >
                  Remove from favourite
                </Button>
              </>
            ) : (
              <>
                <h4>Interested in this offer?</h4>
                <Button
                  variant="secondary"
                  onClick={() => {
                    FavouritesService.add(job);
                    this.setState({ isFavourite: true });
                  }}
                >
                  Add to favourites!
                </Button>
              </>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default JobPage;
