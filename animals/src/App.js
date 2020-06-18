import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login.js';
import Header from './components/Header.js';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        {/* Build out a Private Route */}
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
