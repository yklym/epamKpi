import React from "react";
import "./Gallery.css";

class GalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 1,
    };
  }

  renderSecondaryImages = function () {
    return this.props.imagesArr.map((el, index) => {
      // main-picture-avatar
      return (
        <img
          src={require("./../../../assets/flags/poland.png")}
          className={
            index === this.state.mainImageIndex ? "main-picture-avatar" : ""
          }
          alt={`gallery picture number ${index + 1}`}
          key={index}
        ></img>
      );
    });
  };

  
  render() {
    return (
      <div className="gallery-component">
        <div className="gallery-component-main">
          <img
            src={require("./../../../assets/flags/poland.png")}
            alt="country flag"
          ></img>
        </div>

        <div className="gallery-component-secondary">
          <img
            src={require("./../../../assets/flags/poland.png")}
            alt="country flag"
          ></img>
          <img
            src={require("./../../../assets/flags/poland.png")}
            alt="country flag"
          ></img>
          <img
            src={require("./../../../assets/flags/poland.png")}
            alt="country flag"
          ></img>
          <img
            src={require("./../../../assets/flags/poland.png")}
            alt="country flag"
          ></img>
        </div>
      </div>
    );
  }
}

export default GalleryComponent;
