import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

function SearchFilters() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Search Filters
        </Button>
  
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Event Type</p>
            <p>Search Radius</p>
            <p>Date Range</p>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default SearchFilters;