import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

const CategoriesFilterBar = ({ categories }) => {
  const renderCategoriesNav = arr =>
    arr.map(c => (
      <LinkContainer to={`/${c.name}`} key={c.id}>
        <Nav.Link active={false}>{c.name}</Nav.Link>
      </LinkContainer>
    ));

  return (
    <Row className="mt-2 mb-2">
      <Col>
        <Nav
          className="d-flex justify-content-between"
          variant="pills"
          defaultActiveKey="/"
        >
          <LinkContainer exact to="/">
            <Nav.Link active={false}>ALL</Nav.Link>
          </LinkContainer>

          {renderCategoriesNav(categories)}
        </Nav>
      </Col>
    </Row>
  );
};

CategoriesFilterBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired
};

export default CategoriesFilterBar;