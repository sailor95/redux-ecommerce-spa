import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './homeNavbar.module.css';

const HomeNavbar = () => (
  <Row>
    <Col xs={12} className="d-flex justify-content-center border">
      <div className={classes.navHeight}>
        <span className={classes.navTitle}>Cool Shop</span>
      </div>
    </Col>
  </Row>
);

export default HomeNavbar;