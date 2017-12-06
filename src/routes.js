import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from 'components/App';
import Dancers from 'components/Dancers';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='/dancers' component={Dancers} />
    </Route>
  </Router>
);

export default Routes;
