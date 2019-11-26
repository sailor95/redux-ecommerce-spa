import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import MyNavbar from '../navbar/MyNavbar';
import ProductList from '../product-list/ProductList';
import actions from '../../store/items/actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAllItems();
    this.props.getAllCategories(); // NOTE: Testing purpose, delete in the future
  }

  render() {
    return (
      <Container>
        <MyNavbar />
        <ProductList items={this.props.items.items} />
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  getAllItems: actions.getAllItems,
  getItemById: actions.getItemById,
  getAllCategories: actions.getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);