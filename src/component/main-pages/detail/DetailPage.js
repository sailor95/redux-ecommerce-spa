import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './detailPage.module.css';
import actions from '../../../store/items/actions';
import NotFoundPage from '../not-found/NotFoundPage';
import DetailPageNavbar from './navbar/DetailPageNavbar';
import DetailPageLikeButton from './like-button/DetailPageLikeButton';
import DetailPageFooter from './footer/DetailPageFooter';

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
            className={`d-flex justify-content-center ${classes.imgBackground}`}
          >
            <img width="50%" src={image} />
          </Col>
        </Row>

        <h1>{name}</h1>

        <DetailPageLikeButton like_count={like_count} />

        <hr />

        <div className={classes.descriptionContent}>
          <p>Product Description:</p>
          <p className={classes.descriptionText}>{description}</p>
          <p className={classes.footerStepOver}></p>
        </div>

        <DetailPageFooter price={price} shipping_fee={shipping_fee} />
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