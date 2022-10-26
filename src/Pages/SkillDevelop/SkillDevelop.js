import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaPencilRuler, FaUserGraduate, FaAward } from 'react-icons/fa';

const SkillDevelop = () => {
    return (
        <Container>
            <Row style={{background: '#f5e8cb8f', padding: '20px 0'}}>
                <Col md='4'>
                    <div>
                        <h6 className='text-primary'>What’s New</h6>
                        <h2>Master the skills to drive your career</h2>
                        <p><small>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</small></p>
                    </div>
                </Col>
                <Col md='8'>
                    <Row >
                        <Col md='6' lg='4'>
                            <Card className='align-items-center py-2 m-2'>
                                <FaAward style={{fontSize: '55px', background: '#ffc0cb85', padding: '10px', borderRadius:'15px', color:'#ff6363'}}/>
                                <div className='text-center py-2'>
                                  <Card.Title>10K</Card.Title>
                                  <Card.Text>Online Courses</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col md='6' lg='4'>
                            <Card className='align-items-center py-2 m-2'>
                                <FaPencilRuler style={{fontSize: '55px', background: '#ffc0cb85', padding: '10px', borderRadius:'15px', color:'#ff6363'}}></FaPencilRuler>
                                <div className='text-center py-2'>
                                  <Card.Title>6k</Card.Title>
                                  <Card.Text>Certified Courses</Card.Text>
                                </div>
                            </Card>
                        </Col>
                        <Col md='6' lg='4'>
                            <Card className='align-items-center py-2 m-2'>
                                <FaUserGraduate style={{fontSize: '55px', background: '#ffc0cb85', padding: '10px', borderRadius:'15px', color:'#ff6363'}}/>
                                <div className='text-center py-2'>
                                  <Card.Title>30.5K</Card.Title>
                                  <Card.Text>Online Students</Card.Text>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SkillDevelop;