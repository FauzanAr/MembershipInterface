import React from 'react';
import './App.css';
import Navigation from './navbar/Navigation.js';
import {Route} from 'react-router-dom';

import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' component={Promotions}/>
      <Route path='/promotions' component={Promotions}/>
      <Route path='/rewards' component={Rewards}/>
    </div>
  );
}

export default App;
