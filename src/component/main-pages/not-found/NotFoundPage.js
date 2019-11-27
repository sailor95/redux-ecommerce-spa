import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import DetailPageNavbar from '../../navbar/DetailPageNavbar';

const NotFoundPage = ({ id }) => (
  <Container>
    <DetailPageNavbar title={`Product Id: ${id}`} />
    <h1>Product Not Found</h1>
    <h3>Product Id '{id}' Not Found</h3>
  </Container>
);

NotFoundPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default NotFoundPage;