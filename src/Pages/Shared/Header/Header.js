import React from 'react';
import { Button } from 'react-bootstrap';


// ---------
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white mb-4">
            <Container>
              <Navbar.Brand href="#home" className='fs-1 fw-bold'><FaLaptopCode style={{fontSize: '55px'}}/> Digital learning platform</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link className='me-2 nav-link' to="/">Course</Link>
                  <Link className='me-2 nav-link' to="/course"> FAQ</Link>
                  <Link className='me-2 nav-link' to="/blog">Blog</Link>
                </Nav>
                <Nav>
                <Link  to='/login'><Button style={{background: '#a6b7a9ad', color: 'black', textAlign: 'center'}}>Login</Button></Link>
                  {/* <Nav.Link eventKey={2} href={`/login`}>Dank memes</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;