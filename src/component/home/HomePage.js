import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MyNavbar from '../navbar/MyNavbar';
import ProductList from '../product-list/ProductList';

const HomePage = () => {
  return (
    <Container>
      <MyNavbar />
      <ProductList />
    </Container>
  );
};

export default HomePage;