import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

import classes from './detailPageLikeButton.module.css';

const DetailPageLikeButton = ({ like_count }) => (
  <div className={`${classes.likeBtn} d-flex mt-3 mb-3`}>
    <FontAwesomeIcon
      icon={faHeart}
      size="2x"
      className={`${classes.likeIcon} my-auto ml-4`}
    />
    <div className={`${classes.likeCount} ml-3`}>
      {like_count}
    </div>
  </div>
);

DetailPageLikeButton.propTypes = {
  like_count: PropTypes.number.isRequired
};

export default DetailPageLikeButton;