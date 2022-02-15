import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import SearchFilters from './SearchFilters';

function EventSearch() {
  return (
    <div className="d-flex flex-column" style={{ width: '40vw'}}>
      <Navbar bg="dark" variant="dark" className="justify-content-around">
      <Navbar.Brand>Events</Navbar.Brand>
        <Nav>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
      <h3>Search For Events</h3>
      <div className="d-flex justify-content-center">
        <Form className="d-flex w-75">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </div>
      <SearchFilters/>
    </div>
  );
}

export default EventSearch;
