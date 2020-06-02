import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./VerifyFilter.css";
export default class VerifyFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      salary: 1,
      employerRating: 1,
    };
  }
 
  handleOptionChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    const filtersMap = new Map([
      ["salary", this.state.salary],
      ["employerRating", this.state.employerRating],
    ]);
    this.props.changeFilter(filtersMap);
  };

  render() {

    return (
      <Accordion defaultActiveKey="0">
        <Card className="card-filters">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {"Filters:"}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="slider-filters">
              <div className="form-group">
                <label htmlFor="verifyRange2">
                  Minimal Salary : {this.state.salary}
                </label>
                <input
                  type="range"
                  className="form-control-range"
                  id="verifyRange1"
                  name="salary"
                  max={100}
                  min={0}
                  step={1}
                  value={this.state.salary}
                  onChange={this.handleOptionChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="verifyRange2">
                  Minimal Rating : {this.state.employerRating} / 5
                </label>
                <input
                  type="range"
                  className="form-control-range"
                  id="verifyRange2"
                  name="employerRating"
                  max={5}
                  min={1}
                  step={1}
                  value={this.state.employerRating}
                  onChange={this.handleOptionChange}
                />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
