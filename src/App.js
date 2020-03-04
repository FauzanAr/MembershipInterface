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
    const { loginReducer } = this.props;
    return (
        <div className="App">
          <Router history={history}>
            <Switch>
              <React.Fragment>
              {loginReducer.loggedIn ?
                <Navigation />
                :
                <p></p>
              }
              <PrivateRoute path='/home/promotions' component={Promotions} />
              <PrivateRoute path='/home/rewards' component={Rewards} />
              <PrivateRoute path='/home/logout' component={Login} />
              <Route path='/' exact component={Login} />
              <Route path='/register' component={Register} />
              <Redirect from ="*" to ="/"/>
              </React.Fragment>
            </Switch>
          </Router>
        </div>
    );
  }
}

function mapState (state) {
  const { loginReducer } = state;
  return { loginReducer };
}

const actionCreators = {
  clearAlerts : alertActions.clear
}

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App };
