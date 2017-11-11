import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import App from 'components/App/index';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);

export default Routes;
