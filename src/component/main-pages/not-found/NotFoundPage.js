import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ id }) => (
  <Container>
    <Row>
      <Col>
        <Link to="/">Back to home</Link>
        <h1>Detail Page</h1>
        <div>Product Id: {id}</div>
        <hr />
        <h3>Product Not Found</h3>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;