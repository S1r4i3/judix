// src/components/TestimonialSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    quote: "This is the most efficient Legal Compliance Management tool. The platform is intuitive, easy to use, and has significantly reduced our administrative burden. The compliance tracking feature is exceptional and ensures we stay on top of all our obligations.",
    name: "John Doe",
    role: "CEO of ABC Corp",
    image: "/path/to/user-image.jpg"
  },
  {
    quote: "This is the most efficient Legal Compliance Management tool. The platform is intuitive, easy to use, and has significantly reduced our administrative burden. The compliance tracking feature is exceptional and ensures we stay on top of all our obligations.",
    name: "John Doe",
    role: "CEO of ABC Corp",
    image: "/path/to/user-image.jpg"
  } ,
  {
    quote: "This is the most efficient Legal Compliance Management tool. The platform is intuitive, easy to use, and has significantly reduced our administrative burden. The compliance tracking feature is exceptional and ensures we stay on top of all our obligations.",
    name: "John Doe",
    role: "CEO of ABC Corp",
    image: "/path/to/user-image.jpg"
  }
];

const TestimonialSection = () => (
  <Container className="my-5">
    <h2 className="text-center">What our <span style={{ color: '#ff7900' }}>users</span> say about us</h2>
    {testimonials.map((testimonial, index) => (
      <Row className="align-items-center my-5" key={index}>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Text>"{testimonial.quote}"</Card.Text>
              <div className="d-flex align-items-center">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mr-3" width="50" />
                <div>
                  <strong>{testimonial.name}</strong>
                  <p className="mb-0">{testimonial.role}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    ))}
  </Container>
);

export default TestimonialSection;
