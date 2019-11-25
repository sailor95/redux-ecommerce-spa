import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductBox from '../product-box/ProductBox';

const ProductList = ({ items }) => {
  const renderProducts = () =>
    items.map(i => (
      <Col xs={6} key={i.id} className="mb-2 border">
        <ProductBox
          itemName={i.name}
          itemPrice={i.price}
          itemLikes={i.like_count}
          itemIsSoldOut={i.is_sold_out}
          itemImg={i.image}
        />
      </Col>
    ));

  return (
    <Row>
      <Col xs={12}>
        <h3>Product List</h3>
      </Col>
      <Col xs={12}>
        <Row>
          {renderProducts()}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductList;