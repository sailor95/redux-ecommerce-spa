import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from '../home/HomePage';
import configStore from '../../store/configStore';

const history = createBrowserHistory();
const store = configStore({});

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;