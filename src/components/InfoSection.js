// src/components/InfoSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptop, FaCogs } from 'react-icons/fa';

const InfoSection = () => (
  <Container className="text-center my-5">
    <h2>Managing legal affairs is complicated!</h2>
    <Row className="mt-4">
      <Col md={6}>
        <Card className="p-4 mb-4 shadow-sm">
          <FaCogs size={48} className="mb-3" />
          <Card.Text>
            Current processes are inefficient, resulting in wasted time and resources, as well as a lack of accountability.
          </Card.Text>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="p-4 mb-4 shadow-sm">
          <FaLaptop size={48} className="mb-3" />
          <Card.Text>
            Lack of digitization and excessive reliance on outdated tools such as MS Excel, Word, and emails.
          </Card.Text>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default InfoSection;
