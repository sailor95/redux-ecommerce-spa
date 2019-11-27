import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

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
        <DetailPageNavbar />
        <Row>
          <Col>
            <h1>Detail Page</h1>
            <div>Product Id: {id}</div>
            <hr />
            <img width="50%" src={image} />
            <h3>Product Name: {name}</h3>
            <h5>Likes: {like_count}</h5>
            <h5>Price: ${price}</h5>
            <h5>Shipping Fee: {shipping_fee}</h5>
            <p>Description: {description}</p>
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