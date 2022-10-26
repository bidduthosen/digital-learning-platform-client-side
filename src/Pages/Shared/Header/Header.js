import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaUser } from 'react-icons/fa';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleLogout = ()=>{
        logOut()
            .then(()=>{})
            .catch((error)=>console.error(error))
    }
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
                <Nav className='d-flex justify-content-between align-items-center'>
                {/* user login information */}
                    {user?.uid ? 
                    <>
                    <Nav className='d-flex justify-content-between align-items-center'>
                        <Link  className='me-3'>
                            {user?.photoURL ? <Image title={user?.displayName} className='m-1' style={{height: '35px'}} roundedCircle src={user?.photoURL}></Image>
                              :
                              <FaUser className='m-2' style={{fontSize: "31px"}}/>
                              }
                        </Link>
                        <Link onClick={handleLogout} to='/login' className='me-2'><Button variant="outline-dark">LogOut</Button></Link>
                    </Nav>
                    </>
                    :
                    <>
                    <Nav className='d-flex justify-content-between align-items-center'>
                        <Link  to='/login' className='m-1'><Button variant="outline-dark">Login</Button></Link>
                        <Link  to='/register' className='m-1'><Button variant="outline-dark">Register</Button></Link>
                    </Nav>
                    </>
                    }
                    <div className='my-2 ms-2'>
                        <label className="switch">
                          <input type="checkbox"/>
                          <span className="slider round"></span>
                        </label>
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;