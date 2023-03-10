import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LoginBanner from '../../LoginBanner/LoginBanner';
import './Login.css';



const Login = () => {
    const {signInPassword, signIinGoogle, signInFacebook} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [userError, setUserError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    //  location state 
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignPassword = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInPassword(email, password)
            .then((result)=>{
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from , {replace: true});
            })
            .catch((error)=>{
                console.error(error);
                setUserError(error.message)
            })
    }

    const handleSignInGoogle = () =>{
        signIinGoogle(googleProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch((error)=> console.error(error))
    };

    const handleSignInFacebook = () =>{
        signInFacebook(facebookProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch((error)=>{
                console.error(error);
                setUserError(error.message);
            })
    }

    const handleAcceptTerms = event =>{
        setAccepted(event.target.checked)
      }

    return (
        <Container>
            <Row>
                <Col md='6'>
                    <LoginBanner></LoginBanner>
                </Col>
                <Col md='6' style={{boxShadow: "rgb(136 136 136 / 46%) 0px -1px 4px 1px"}}>
                    <h3 className='my-3 fs-bold fst-italic'>Sign In Your Account</h3>
                    <Form onSubmit={handleSignPassword}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Password" required/>
                        </Form.Group>
                        <small className='text-danger'>{userError}</small>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check onClick={handleAcceptTerms} type="checkbox" label={<>Accept <Link>Terms & Conditions</Link></>}/>
                        </Form.Group>
                        <Button variant="outline-primary w-100" type="submit" disabled={!accepted}>
                          Submit
                        </Button>
                    </Form>
                    <br />
                    <hr />
                    <br />
                    <div className=" mb-5">
                            <p className='text-center'>Or sign in with</p>
                        <div className='text-center'>
                        <Button onClick={handleSignInGoogle} variant="outline-success m-2 px-2" ><FaGoogle/> Login Via Google</Button>
                        <Button onClick={handleSignInFacebook} variant="outline-dark px-2"><FaFacebook/> Login Via Facebook</Button>

                        </div>
                        <p className='text-center my-4'><small>New User ? <Link to='/register'>Create an Account</Link></small></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;