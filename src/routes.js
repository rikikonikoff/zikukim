import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'components/App';
import Dancers from 'components/Dancers';
import Spreadsheet from 'components/Spreadsheet'

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Spreadsheet} />
      <Route path='/dancers' component={Dancers} />
    </Route>
  </Router>
);

export default Routes;
