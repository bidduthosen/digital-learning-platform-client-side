import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginBanner from '../../LoginBanner/LoginBanner';
import './Login.css';



const Login = () => {
    return (
        <Container>
            <Row>
                <Col md='6'>
                    <LoginBanner></LoginBanner>
                </Col>
                <Col md='6'>
                    <h3 className='mb-5 fs-bold'>Sign In Your Account</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="outline-primary w-100" type="submit">
                          Submit
                        </Button>
                    </Form>
                    <br />
                    <hr />
                    <br />
                    <div className=" mb-5">
                            <p className='text-center'>Or sign in with</p>
                        <div className='text-center'>
                        <Button variant="outline-success m-2 px-2" ><FaGoogle/> Login Via Google</Button>
                        <Button variant="outline-dark px-2"><FaFacebook/> Login Via Facebook</Button>

                        </div>
                        <p className='text-center my-4'><small>New User ? <Link to='/register'>Create an Account</Link></small></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;