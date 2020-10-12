import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FrontPage from './subjects/FrontPage';
import SocketIo from './subjects/SocketIo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/socketio" component={SocketIo} />
    </Switch>
  )
}
