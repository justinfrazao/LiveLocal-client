import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "60vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div>
      <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={'pk.eyJ1IjoianVzdGluZnJhemFvIiwiYSI6ImNrcDJ1b3o4YjAwbnAyb3BjejE1dGxpOGQifQ.ST0x1d9ZTxNuNce16NaKkQ'}
      />
    </div>
  );
}

export default Map;
