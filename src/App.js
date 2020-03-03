import React from 'react';
import Navigation from './navbar/Navigation.js';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from './history';

import Promotions from './pages/Promotions.js';
import Rewards from './pages/Rewards.js';
import Login from './member/Login.js';
import Register from './member/Register.js';
import store from './Store.js';

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
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Switch>
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
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

const actionCreators = {
  clearAlerts : alertActions.clear
}


export default App;
