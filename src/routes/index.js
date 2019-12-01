import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bands from '../pages/Bands';
import Band from '../pages/Band';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Bands} />
    </Switch>
  </>
);

export default Routes;
