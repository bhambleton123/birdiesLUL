import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import BirdInfo from './BirdInfo';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/:bird' component={BirdInfo} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
