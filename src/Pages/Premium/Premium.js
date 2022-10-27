import React, { useContext } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaBook, FaRegClock } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Premium';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Premium = () => {
    const {user} = useContext(AuthContext);
    const courseInfo = useLoaderData();
    const { lesson, course_free, class_time, course_name, picture} = courseInfo ;

    return (
       <Container className='mt-3'>
        <h3 className='text-info'>Admission From</h3>
            <Row>
                <Col md='7'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" readOnly defaultValue={user?.displayName} placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" defaultValue={user?.email} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                          <Form.Label>Photo URL</Form.Label>
                          <Form.Control type="text" defaultValue={user?.photoURL} placeholder="Photo Url" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" placeholder="+088..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                          <Form.Label>Permanent address</Form.Label>
                          <Form.Control type="text" placeholder="address" />
                        </Form.Group>
                        <div className='m-2'>
                            <h4 className='m-2 text-primary'>Prement Options</h4>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Bkash" />
                                </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Pay-pal" />
                                </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Roket" />
                            </Form.Group>
                        </div>
                        <div className='m-2'>
                            <FloatingLabel
                                controlId="floatingTextarea" label="Comments" className="mb-3">
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                        </div>
                        <Button variant="primary my-2" type="submit">
                          Submit
                        </Button>
                    </Form>
                </Col>
                <Col md='5'>
                    <Card>
                        <Card.Header as="h5">
                            <Row>
                                <div className='text-center'>
                                    <h3 className='text-info'>Course Free: {course_free}</h3>
                                </div>
                            </Row>
                        </Card.Header>
                        <Card.Body className='d-flex justify-content-between align-items-center'>
                        <Image style={{height: '80px'}} roundedCircle src={picture} ></Image>
                          <Card.Title className='text-primary fs-2'>{course_name}</Card.Title>
                        </Card.Body>
                        <div className='d-flex justify-content-between align-items-center m-4'>
                            <h6><FaBook></FaBook> {lesson}</h6>
                            <h6><FaRegClock></FaRegClock> {class_time}</h6>
                        </div>
                        <div>
                            <h4 className='m-2'>Features</h4>
                            <ul>
                                <li>User Friendly & Simple.</li>
                                <li>Semantic Structure.</li>
                                <li>SEO – Search Engine Optimisation.</li>
                                <li>localStorage & IndexedDB – Client-side data storage.</li>
                                <li>Platform Independent.</li>
                                <li>Canvas for Game Development</li>
                                <li>Offline Capabilities (PWA) with Cache API & Service Workers.</li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
       </Container>
    );
};

export default Premium;