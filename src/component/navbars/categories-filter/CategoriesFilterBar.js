import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

const CategoriesFilterBar = ({
  categories,
  getFilteredItems
}) => {
  const renderCategoriesNav = arr =>
    arr.map(c => (
      <LinkContainer key={c.id} to={`/${c.name}`}>
        <Nav.Link active={false} onClick={() => getFilteredItems(c.id)}>
          {c.name}
        </Nav.Link>
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
            <Nav.Link active={false} onClick={() => getFilteredItems('')}>
              ALL
            </Nav.Link>
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
  })).isRequired,
  getFilteredItems: PropTypes.func.isRequired
};

export default CategoriesFilterBar;