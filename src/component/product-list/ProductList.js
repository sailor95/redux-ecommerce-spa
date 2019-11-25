import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductBox from '../product-box/ProductBox';

const ProductList = () => {
  return (
    <Row>
      <Col xs={12}>
        <h3>Product List</h3>
      </Col>
      <Col xs={12}>
        <Row>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </Row>
      </Col>
    </Row>
  );
};

export default ProductList;