import React from 'react';
import Navigation from './navbar/Navigation.js';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';
import Login from './member/Login.js';
import Register from './member/Register.js';
import store from './Store.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/home' component={Navigation} />
          <PrivateRoute path='/home' component={Promotions} />
          <PrivateRoute path='/home/rewards' component={Rewards} />
      </div>
    </Provider>
  );
}

export default App;
