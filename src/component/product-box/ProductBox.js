import React from 'react';
import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const ProductBox = ({
  itemId,
  itemName,
  itemPrice,
  itemLikes,
  itemIsSoldOut,
  itemImg,
  history
}) => {
  return (
    <Col
      xs={6}
      className="mb-2 border"
      onClick={() => history.push(`/product/${itemId}`)}
    >
      <h5 className="border">
        Product Box
      </h5>
      <img width="100%" src={`${itemImg}`} />
      <h3>{itemName}</h3>
      <h5>${itemPrice}</h5>
      <h5>Likes: {itemLikes}</h5>
      <h5>Is sold out? {(itemIsSoldOut) ? <span>Yes</span> : <span>No</span>}</h5>
    </Col>
  );
};

export default withRouter(ProductBox);