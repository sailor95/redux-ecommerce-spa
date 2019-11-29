import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import HomeNavbar from '../../navbars/home-page/HomeNavbar';
import CategoriesFilterBar from '../../navbars/categories-filter/CategoriesFilterBar';
import ProductBoxList from '../../product-box-list/ProductBoxList';
import actions from '../../../store/items/actions';

class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.match.url !== '/') {
      this.props.history.push('/');
    }

    this.props.getAllCategories();
    this.props.getAllItems();
  }

  render() {
    return (
      <Container>
        <HomeNavbar />

        <CategoriesFilterBar
          categories={this.props.items.categories}
          getFilteredItems={this.props.getFilteredItems}
        />

        <ProductBoxList items={this.props.items.items} />
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  getAllItems: actions.getAllItems,
  getAllCategories: actions.getAllCategories,
  getFilteredItems: actions.getFilteredItems
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);