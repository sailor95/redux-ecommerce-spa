import React from 'react';
import PropTypes from 'prop-types';

import classes from './detailPageFooter.module.css';
import currencySeparator from '../../../../services/helpers/currencySeparator';

const DetailPageFooter = ({ price, shipping_fee }) => (
  <div className={`${classes.fixBar} d-flex`}>
    <h1 className="my-auto ml-4">¥{currencySeparator(price)}</h1>
    <p className="ml-4 d-flex align-items-end">{shipping_fee}</p>
  </div>
);

DetailPageFooter.propTypes = {
  price: PropTypes.number.isRequired,
  shipping_fee: PropTypes.string.isRequired
};

export default DetailPageFooter;