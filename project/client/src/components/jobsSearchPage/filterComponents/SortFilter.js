import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currFilter: "date",
    };
    this.props.changeFilter("date");

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
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="basicRadio1"
                  value="date"
                  checked={this.state.currFilter === "date"}
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="basicRadio1">
                  Date
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="basicRadio2"
                  value="salary"
                  checked={this.state.currFilter === "salary"}
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="basicRadio2">
                  Salary
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="basicRadio3"
                  value="country"
                  checked={this.state.currFilter === "country"}
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="basicRadio3">
                Country
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="basicRadio4"
                  value="rating"
                  checked={this.state.currFilter === "rating"}
                  onChange={this.handleOptionChange}
                />
                <label class="form-check-label" for="basicRadio4">
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
