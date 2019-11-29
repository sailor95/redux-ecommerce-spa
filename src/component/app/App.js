import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Root from './Root';
import HomePage from '../main-pages/home/HomePage';
import DetailPage from '../main-pages/detail/DetailPage';

const history = createBrowserHistory();

const App = () => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route exact path="/:category?" component={HomePage} />
        <Route path="/product/:id" component={DetailPage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  </Root>
);

export default App;