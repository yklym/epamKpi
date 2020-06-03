import React from "react";
import "./Gallery.css";

class GalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 0,
    };
  }

  setMain = function (index) {
    this.setState({ mainImageIndex: index });
  };
  renderSecondaryImages = function (imagesArr) {
    return imagesArr.map((el, index) => {
      return (
        <img
          src={el}
          className={
            index === this.state.mainImageIndex ? "main-picture-avatar" : ""
          }
          alt={` number ${index + 1}`}
          key={index}
          onClick={() => {
            this.setMain(index);
          }}
        ></img>
      );
    });
  };

  render() {
    if (!this.props.images.length) {
      return (
        <div className="gallery-component">
          <div className="gallery-component-main">
            <p>No images for this position</p>
          </div>

          <div className="gallery-component-secondary"></div>
        </div>
      );
    }
    return (
      <div className="gallery-component">
        <div className="gallery-component-main">
          <img
            src={this.props.images[this.state.mainImageIndex]}
            alt="country flag"
          ></img>
        </div>

        <div className="gallery-component-secondary">
          {this.renderSecondaryImages(this.props.images)}
        </div>
      </div>
    );
  }
}

export default GalleryComponent;
