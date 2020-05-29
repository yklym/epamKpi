import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleMapApi } from "../../../config/config";

function GoogleMapComponent(props) {
  const { xCord, yCord } = props;
  return (
    <Map
      google={props.google}
      style={{
        width: "700px",
        height: "400px",
      }}
      zoom={8}
      initialCenter={{ lat: xCord, lng: yCord }}
    >
      <Marker position={{ lat: xCord, lng: yCord }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: googleMapApi,
})(GoogleMapComponent);
