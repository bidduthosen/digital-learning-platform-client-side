import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSiteNav from '../Pages/Shared/LeftSiteNav/LeftSiteNav';

const Main = () => {
    return (
        <div style={{background: 'rgba(27, 41, 80, 0.05)'}}>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3 bg-success bg-opacity-25'>
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg='9'><Outlet></Outlet></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;