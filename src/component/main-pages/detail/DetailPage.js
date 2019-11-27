import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import actions from '../../../store/items/actions';
import NotFoundPage from '../not-found/NotFoundPage';

class DetailPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getItemById(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { history } = this.props;
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
        <Row>
          <Col>
            <Row>
              <Col xs={12} className="border">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => history.push('/')}
                />
              </Col>
            </Row>
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