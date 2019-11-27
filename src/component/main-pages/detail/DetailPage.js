import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import classes from './detailPage.module.css';
import actions from '../../../store/items/actions';
import NotFoundPage from '../not-found/NotFoundPage';
import DetailPageNavbar from './detail-page-navbar/DetailPageNavbar';

class DetailPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getItemById(id);
  }

  render() {
    const { id } = this.props.match.params;
    const {
      name,
      image,
      like_count,
      description,
      price,
      shipping_fee
    } = this.props.item;

    if (!name) {
      return <NotFoundPage id={id} />
    }

    return (
      <Container>
        <DetailPageNavbar title={name} />
        <Row>
          <Col
            xs={12}
            className={`d-flex justify-content-center ${classes.imgBackground}`}
          >
            <img width="50%" src={image} />
          </Col>
          <Col xs={12}>
            <h1>{name}</h1>
          </Col>
          <Col xs={12}>
            <div className={`${classes.likeBtn} d-flex mt-3 mb-3`}>
              <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                className={`${classes.likeBtnLikeIcon} my-auto ml-4`}
              />
              <div className={`${classes.likeBtnLikeCount} ml-3`}>
                {like_count}
              </div>
            </div>
          </Col>
          <Col xs={12} className={classes.descriptionContent}>
            <p>Description: {description}</p>
          </Col>
          <Col xs={12} className={`${classes.floatBar} d-flex`}>
            <h5 className="my-auto ml-4">Price: ${price}</h5>
            <h5 className="my-auto ml-4">Shipping Fee: {shipping_fee}</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProp = state => ({
  item: state.items.currentItem
});

const mapDispatchToProp = {
  getItemById: actions.getItemById
};

export default connect(mapStateToProp, mapDispatchToProp)(DetailPage);