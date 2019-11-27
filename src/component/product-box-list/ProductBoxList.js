import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ProductBox from './product-box/ProductBox';

const ProductBoxList = ({ items }) => {
  const renderProducts = () =>
    items.map(i => (
      <ProductBox
        key={i.id}
        itemId={i.id}
        itemName={i.name}
        itemPrice={i.price}
        itemLikes={i.like_count}
        itemIsSoldOut={i.is_sold_out}
        itemImg={i.image}
      />
    ));

  return (
    <div>
      <Row>
        <Col>
          <h3>Product List</h3>
        </Col>
      </Row>
      <Row>
        {renderProducts()}
      </Row>
    </div>
  );
};

ProductBoxList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemLikes: PropTypes.number,
    itemIsSoldOut: PropTypes.bool,
    itemImg: PropTypes.string
  })).isRequired
};

export default ProductBoxList;