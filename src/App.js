import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/visualizar/:id" component={Visualizar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
