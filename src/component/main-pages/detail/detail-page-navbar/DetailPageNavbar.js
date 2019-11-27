import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import classes from './detailPageNavbar.module.css';

const DetailPageNavbar = ({ history }) => (
  <Row>
    <Col xs={12} className="border">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={classes.navHeight}
        size="2x"
        onClick={() => history.push('/')}
      />
    </Col>
  </Row>
);

export default withRouter(DetailPageNavbar);