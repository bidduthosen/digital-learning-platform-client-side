import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container style={{boxShadow: "rgb(136 136 136 / 46%) 0px -1px 4px 1px"}}>
            <h3 className='my-3 fs-bold fst-italic text-center pt-3'>Registration Now</h3>
            <Form className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name='name' placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control type="text" name='photoURL' placeholder="Photo Url" required/>
                </Form.Group>
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            <p className='text-center my-4 pb-4'><small>Already Have a Account Please ? <Link to='/login'>Login</Link></small></p>

        </Container>
    );
};

export default Register;