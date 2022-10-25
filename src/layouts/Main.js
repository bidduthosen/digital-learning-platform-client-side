import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSiteNav from '../Pages/Shared/LeftSiteNav/LeftSiteNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md='4'>
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col md='8'><Outlet></Outlet></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;