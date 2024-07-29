// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={4}>
          <h5>Judix</h5>
          <p>© 2023 Judix Inc. All rights reserved.</p>
        </Col>
        <Col md={4}>
          <h5>Products</h5>
          <ul className="list-unstyled">
            <li><a href="#product1" className="text-white">Product 1</a></li>
            <li><a href="#product2" className="text-white">Product 2</a></li>
            <li><a href="#product3" className="text-white">Product 3</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li><a href="mailto:contact@judix.com" className="text-white">contact@judix.com</a></li>
            <li><a href="tel:+1234567890" className="text-white">+1 234 567 890</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
