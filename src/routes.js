import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App/index';
import Dancers from 'components/Dancers/index';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Route path="/" component={App} />
      <Route path="/dancers" component={Dancers} />
    </div>
  </BrowserRouter>
);

export default Routes;
