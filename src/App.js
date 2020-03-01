import React from 'react';
import Navigation from './navbar/Navigation.js';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';


import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';
import Login from './member/Login.js';
import Register from './member/Register.js';
import Blank from './Blank.js';
import store from './Store.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

function App() {
  const isLoggedIn = localStorage.getItem('user') ? true : false;
  return (
    <Provider store={store}>
      <div className="App">
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          {isLoggedIn && window.location.pathname === '/home' ?
            <Navigation />
            :
            <div />
          }
            <PrivateRoute path='/home/promotions' component={Promotions} />
            <PrivateRoute path='/home/rewards' component={Rewards} />
            <PrivateRoute path='/home/logout' component={Login} />
      </div>
    </Provider>
  );
}

export default App;
