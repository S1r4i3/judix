// src/components/FeaturesSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  {
    title: "Designed to give you a peace of mind",
    description: "Customers experience peace of mind knowing that we handle their legal complexities, allowing them to avoid the stress and burden of managing these issues themselves.",
    image: "/path/to/image1.jpg"
  },
  {
    title: "Save time and reduce costs",
    description: "We reduce the burden on founders by freeing up their time, resources, and mental bandwidth, allowing them to concentrate on their core operations and business growth.",
    image: "/path/to/image2.jpg"
  },
  {
    title: "Unparalleled legal, guidance, and support",
    description: "Connects with experienced lawyers and chartered accountants for personalized consultations, offering exceptional legal guidance and support. Navigate complex legal matters confidently with our top-notch expertise and dedicated assistance.",
    image: "/path/to/image3.jpg"
  }
];

const FeaturesSection = () => (
  <Container className="my-5">
    {features.map((feature, index) => (
      <Row className="align-items-center my-5" key={index}>
        <Col md={6} className={index % 2 === 0 ? 'order-md-2' : ''}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className={index % 2 === 0 ? 'order-md-1' : ''}>
          <img src={feature.image} alt={feature.title} className="img-fluid" />
        </Col>
      </Row>
    ))}
  </Container>
);

export default FeaturesSection;
