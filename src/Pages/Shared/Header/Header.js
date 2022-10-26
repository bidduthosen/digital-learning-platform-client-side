import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaUser, FaUserCircle } from 'react-icons/fa';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" style={{background: "#ebd6a6"}} variant="white mb-4">
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
                {/* user information */}
                    {user?.uid ? 
                    <>
                    <Nav className='d-flex justify-content-between align-items-center'>
                        <div className='me-2 text-primary'>
                            {user?.displayName ? 
                            <>{user?.displayName}</> 
                            : 
                            <><div style={{fontSize: "20px"}}>Unknown Person</div></>}
                        </div>

                        <Link  className='me-3'>
                            {user?.photoURL ? <Image className='m-1' style={{height: '35px'}} roundedCircle src={user?.photoURL}></Image>
                              :
                              <FaUser className='m-2' style={{fontSize: "31px"}}/>
                              }
                        </Link>
                        <Link  to='/login' className='me-2'><Button variant="outline-dark">LogOut</Button></Link>
                    </Nav>
                    </>
                    :
                    <>
                        <Link to='/login' className='me-3 d-flex align-items-center'><FaUserCircle style={{fontSize: "31px", color: "black"}}/></Link>
                        <Link  to='/login' className='me-2'><Button variant="outline-dark">Login</Button></Link>
                        <Link  to='/register' className='me-2'><Button variant="outline-dark">Register</Button></Link>
                    </>
                    }
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;