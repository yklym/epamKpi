import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currFilter: "id",
    };
    this.props.changeFilter("id");

  }

  handleOptionChange = (event) => {
    this.setState({
      currFilter: event.target.value,
    });
    this.props.changeFilter(event.target.value);
  };

  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {"Sort by:"}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="basicRadio1"
                  value="id"
                  checked={this.state.currFilter === "id"}
                  onChange={this.handleOptionChange}
                />
                <label className="form-check-label" htmlFor="basicRadio1">
                  Date
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="basicRadio2"
                  value="salary"
                  checked={this.state.currFilter === "salary"}
                  onChange={this.handleOptionChange}
                />
                <label className="form-check-label" htmlFor="basicRadio2">
                  Salary
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="basicRadio3"
                  value="country"
                  checked={this.state.currFilter === "country"}
                  onChange={this.handleOptionChange}
                />
                <label className="form-check-label" htmlFor="basicRadio3">
                Country
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="basicRadio4"
                  value="employerRating"
                  checked={this.state.currFilter === "employerRating"}
                  onChange={this.handleOptionChange}
                />
                <label className="form-check-label" htmlFor="basicRadio4">
                Employer rating
                </label>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
