import React from 'react';
import Navigation from './navbar/Navigation.js';
import {Route, Redirect} from 'react-router-dom';

import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';
import Login from './member/Login.js';
import Register from './member/Register.js';

function loggedIn() {
  if(localStorage.getItem('user') === null){
    return false
  } else{
    return true
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <div className="App">
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/home' component={Navigation} />
        <PrivateRoute path='/promotions' component={Promotions} />
        <PrivateRoute path='/rewards' component={Rewards} />
    </div>
  );
}

export default App;
