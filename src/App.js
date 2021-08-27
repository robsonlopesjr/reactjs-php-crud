import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastrar" component={Cadastrar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
