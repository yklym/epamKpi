import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Slider.css";

class Slider extends React.Component {
  render() {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://delo.ua/files/news/images/3675/76/picture2_v-rezhime-work-fr_367576_p0.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://exchange-work.com/templates/LightHouse/images/wmlogo.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://www.elcore.ua/wp-content/uploads/2017/04/work.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
