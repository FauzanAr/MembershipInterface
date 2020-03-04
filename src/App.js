import React from 'react';
import Navigation from './navbar/Navigation.js';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { history } from './history';
import { connect } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { alertActions } from './actions/alertActions';
import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';
import { Login } from './member/Login.js';
import Register from './member/Register.js';

class App extends React.Component{
  constructor(props)
  {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    })
  }
  render() {
    const isLoggedIn = localStorage.getItem('user') ? true : false;
    return (
        <div className="App">
          <Router history={history}>
            <Switch>
              <React.Fragment>
              <PrivateRoute path='/home/promotions' component={Promotions} />
              <PrivateRoute path='/home/rewards' component={Rewards} />
              <PrivateRoute path='/home/logout' component={Login} />
              <Route path='/' exact component={Login} />
              <Route path='/register' component={Register} />
              {isLoggedIn && window.location.pathname === '/home' ?
                <Navigation />
                :
                <p></p>
              }
              <Redirect from ="*" to ="/"/>
              </React.Fragment>
            </Switch>
          </Router>
        </div>
    );
  }
}

const actionCreators = {
  clearAlerts : alertActions.clear
}

const connectedApp = connect(null, actionCreators)(App);

export { connectedApp as App };
