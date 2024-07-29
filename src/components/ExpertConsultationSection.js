// src/components/ExpertConsultationSection.js
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const ExpertConsultationSection = () => (
  <Container className="text-center my-5">
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Expert Consultation</Card.Title>
            <Card.Text>
              Get personalized legal and financial guidance from anywhere with our online platform connecting you to certified experts.
            </Card.Text>
            <ul className="list-unstyled">
              <li><FaCheckCircle className="text-success mr-2" /> Expert guidance 24/7</li>
              <li><FaCheckCircle className="text-success mr-2" /> Experienced lawyers and chartered accountants from all over India</li>
              <li><FaCheckCircle className="text-success mr-2" /> Get transcription and recordings of consultation for future reference</li>
            </ul>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col md={6} className="mb-3">
        <Button variant="outline-primary" className="w-100">Explore All Products</Button>
      </Col>
      <Col md={6} className="mb-3">
        <Button variant="outline-secondary" className="w-100">Talk to Experts</Button>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col>
        <h2>All you need is <span className="text-warning">Judix</span></h2>
      </Col>
    </Row>
  </Container>
);

export default ExpertConsultationSection;
