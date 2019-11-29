import React from 'react';
import { Provider } from 'react-redux';

import configStore from '../../store/configStore';

// NOTE: This is a Provider HOC for both main App and Redux related unit test
const Root = ({ children, initState = {} }) => (
  <Provider store={configStore(initState)}>
    {children}
  </Provider>
);

export default Root;