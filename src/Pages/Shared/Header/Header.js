import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className='mb-4'>
      <Container>
        <Navbar.Brand className='fs-1 fw-bold'>Digital learning platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className='me-2 nav-link' to="/">Course</Link>
            <Link className='me-2 nav-link' to="/course"> FAQ</Link>
            <Link className='me-2 nav-link' to="/blog">Blog</Link>
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