import React from 'react';
import Map from './Map';
import EventSearch from './EventSearch';

function MapPage() {
  return (
    <div className="d-flex">
      <Map/>
      <EventSearch/>
    </div>
  );
}

export default MapPage;
