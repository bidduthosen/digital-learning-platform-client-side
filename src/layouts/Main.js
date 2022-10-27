import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSiteNav from '../Pages/Shared/LeftSiteNav/LeftSiteNav';
import SkillDevelop from '../Pages/SkillDevelop/SkillDevelop';

const Main = () => {
    return (
        <div style={{background: 'rgba(27, 41, 80, 0.05)'}}>
            <Header></Header>
            <SkillDevelop></SkillDevelop>
            <hr />
            <Container>
                <Row>
                    <Col lg='3' style={{background: '#f0f0f0', boxShadow: "15px 15px 25px 0px #88888875"}}>
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg='9'><Outlet></Outlet></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;