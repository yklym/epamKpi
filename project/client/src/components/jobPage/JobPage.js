import React from "react";
import "./JobPage.css";
import { Button } from "react-bootstrap";

import MapComponent from "./map/LocationMap";
import GalleryComponent from "./gallery/Gallery";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";

class JobPage extends React.Component {
  render() {
    return (
      <main className="job-page-body">
        {/* job name */}
        <h3>Job Name</h3>
        <section className="job-page-description">
          <div className="text-wrapper">
            <h4>Description:</h4>

            <p>
              Lorem ipsum dolor sit amet, eros euismod distinctio ligula
              vehicula, quam libero, lectus sed ipsum eu fringilla sed
              tincidunt, ut quam adipiscing sed. Dictum mauris diam sodales
              placeat eleifend, tempus erat vel. Nunc pede, blandit cum cursus
              facilisis quis ligula cubilia, auctor hac tellus potenti ipsum, id
              lobortis dolor turpis sodales phasellus arcu, varius tincidunt at.
              Tincidunt a nec orci mi, lacinia donec et etiam et, egestas
              gravida sed, libero rutrum aliquam, a wisi. Ut et eget auctor
              tempus, elementum nec ante lacus mauris eros lectus, eget tempor,
              neque felis ipsum ratione senectus ullamco. A leo urna fermentum,
              netus curae primis nullam, enim euismod per. Purus congue ornare
              odio amet, vehicula quis interdum in varius ligula, tempus auctor
              erat sed ullamcorper in, gravida class ante, feugiat nulla
              consequatur tortor lobortis praesent. Suspendisse purus, sed
              ligula ac nunc felis eget ut, vehicula at dolor lobortis mi.
            </p>
          </div>
          <div className="img-wrapper">
            <h5>Country:</h5>
            <img
              src={require("./../../assets/flags/poland.png")}
              alt="country flag"
            ></img>
          </div>
        </section>

        <section>
          <h4>Gallery:</h4>
          <GalleryComponent />
        </section>

        <section className="job-page-details">
          <h4>Job Details:</h4>
          <div className="table-wrapper">
            <table className="table table-hover table-sm">
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Thornton</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-hover table-sm">
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Thornton</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="job-page-location">
          <div id="map-wrapper">
            <MapComponent xCord={47.444} yCord={-122.176} />
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
