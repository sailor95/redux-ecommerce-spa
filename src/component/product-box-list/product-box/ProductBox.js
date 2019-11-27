import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import classes from './productBox.module.css';
import currencySeparator from '../../../services/helpers/currencySeparator';

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
    <Col xs={12} sm={6} className="mb-3">
      <div
        className={`${classes.box} p-3`}
        onClick={() => history.push(`/product/${itemId}`)}
      >
        <Row>
          <Col xs={12}>
            <img width="100%" src={`${itemImg}`} />
          </Col>
          <Col xs={12}>
            <h1 className="text-secondary">{itemName}</h1>
          </Col>
          <Col xs={6}>
            <h3>¥{currencySeparator(itemPrice)}</h3>
          </Col>
          <Col xs={6}>
            {
              !!itemLikes &&
              <h3 className="float-right mr-3">
                <FontAwesomeIcon icon={faHeart} />
                {' '}{itemLikes}
              </h3>
            }
          </Col>
          {
            itemIsSoldOut &&
            <div className={classes.soldIcon}>
              <span>SOLD</span>
            </div>
          }
        </Row>
      </div>

    </Col>
  );
};

ProductBox.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemLikes: PropTypes.number.isRequired,
  itemIsSoldOut: PropTypes.bool.isRequired,
  itemImg: PropTypes.string.isRequired
};

export default withRouter(ProductBox);