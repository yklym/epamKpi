import React from "react";
import FavouritesService from "../../../services/Favourites.service";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: FavouritesService.check(props.job.id),
    };
  }

  // componentDidMount(){

  // }

  render() {
    const job = this.props.job;
    const isFavourite = this.state.isFavourite;
    return (
      <Card className="w-90">
        <Card.Header as="h5">
          <Link to={`/jobs/${job.id}`}>{job.name}</Link>{" "}
          {isFavourite ? (
            <span className="badge badge-danger">Favourite</span>
          ) : (
            ""
          )}
        </Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <ul>
            <li>Country: {job.info.country || "Not assigned"}</li>
            <li>Salary: {job.info.salary || "Not assigned"}</li>
            <li>Employer rating:{job.info.employerRating || "Not assigned"}</li>
          </ul>
          {isFavourite ? (
            <Button
              variant="danger"
              onClick={() => {
                FavouritesService.delete(job.id);
                this.setState({ isFavourite: false });
              }}
            >
              Remove from favourite
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                FavouritesService.add(job);
                this.setState({ isFavourite: true });
              }}
            >
              Add to favourite
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}
