import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './detailPageNavbar.module.css';

const DetailPageNavbar = ({
  history,
  title
}) => (
    <Row>
      <Col xs={12} className="border d-flex justify-content-between">
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={classes.navHeight}
            size="2x"
            onClick={() => history.push('/')}
          />
        </div>

        <div className={classes.title}>
          {title}
        </div>

        <div>
          <FontAwesomeIcon
            icon={faShareAlt}
            className={classes.navHeight}
            size="2x"
          />
        </div>
      </Col>
    </Row>
  );

export default withRouter(DetailPageNavbar);