import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bands from '../pages/Bands';
import Band from '../pages/Band';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Bands} />
        <Route path="/bands/:bandId" component={Band} />
      </Switch>
    </>
  );
}
