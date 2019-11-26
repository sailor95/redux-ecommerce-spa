import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from '../main-pages/home/HomePage';
import DetailPage from '../main-pages/detail/DetailPage';
import configStore from '../../store/configStore';

const history = createBrowserHistory();
const store = configStore({});

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={DetailPage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default App;