import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container fluid className="mt-5 py-5 bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <Link className="footer-link" to="/home">Home</Link>
                        <Link className="footer-link" to="/about">About</Link>
                        <Link className="footer-link" to="/courses">Courses</Link>

                    </Col>
                    <Col className="text-end"> <small>&copy; Copyright 2021, junior dev Md Sarwar Jahan Masud</small></Col>
                </Row>
            </Container>
        </Container>
        </div>
    );
};

export default Footer;