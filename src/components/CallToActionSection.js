// src/components/CallToActionSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToActionSection = () => (
  <Container className="my-5 text-center">
    <Row>
      <Col>
        <h2>Your Startup's Legal Partner: <span style={{ color: '#ff7900' }}>Transparent</span></h2>
        <p>Here’s what we can do for you!</p>
        <Button variant="warning" className="mt-3">Request a Demo</Button>
      </Col>
    </Row>
  </Container>
);

export default CallToActionSection;
