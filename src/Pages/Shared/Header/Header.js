import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='mb-4'>
      <Container>
        <Navbar.Brand className='fs-2 fw-bold'>Digital learning platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className='me-2' to="/courses">Course</Link>
            <Link className='me-2' to="/course"> FAQ</Link>
            <Link className='me-2' to="/blog">Blog</Link>
          </Nav>
          <Nav className="">
            <Button>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;