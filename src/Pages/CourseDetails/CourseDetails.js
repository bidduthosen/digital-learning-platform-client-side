import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBook, FaDownload, FaLock, FaRegClock } from 'react-icons/fa';
import Pdf from "react-to-pdf";

import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const ref = React.createRef();
    const allCourse = useLoaderData();
    const {id, course_name, about, author, lesson, class_time} = allCourse;
    return (
        <Container className='my-3' ref={ref}>
            <Card>
                <Card.Header as="h5">
                    <Row>
                        <Col>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='d-flex'>
                                <Image style={{height: '40px'}} roundedCircle src={author.img} ></Image>
                                <div className='ms-2'>
                                <h6>{author.name}</h6>
                                <h6>{author.job}</h6>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col>
                             <div className='d-flex justify-content-between align-items-center mt-4'>
                                <h6><FaBook></FaBook> {lesson}</h6>
                                <h6><FaRegClock></FaRegClock> {class_time}</h6>
                                <Pdf targetRef={ref} filename="Course-Info.pdf">
                                     {({ toPdf }) => <FaDownload onClick={toPdf}></FaDownload>}
                                </Pdf>
                                
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                
                  <Card.Title className='text-primary fs-2'>{course_name}</Card.Title>
                  <Card.Text>{about}</Card.Text>
                  <Button variant="outline-info"><Link to={`/premium/${id}`} style={{textDecoration:"none", color: 'black'}}> ,<FaLock></FaLock> Get premium access</Link></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;