import './App.scss';
import React from 'react';
import Login from './Login';
import SideMenu from './SideMenu';
import { Switch, Route, withRouter } from 'react-router-dom';
import { users } from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn(userName) {
    const user = users.find((user) => user.userName === userName);
    this.setState({
      user: user,
    });
  }

  logOut() {
    this.setState({
      user: '',
    });
    this.props.history.push('/');
  }

  // Clearing the URL on refresh
  componentDidMount() {
    const { history } = this.props;
    history.replace('/');
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Login logIn={this.logIn} logOut={this.logOut} user={this.state.user} />

        <div className="App__menu__container">
          <SideMenu user={this.state.user} />
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route exact path="/analytics">
              <h1>Analytics</h1>
            </Route>
            <Route exact path="/analytics/dashboard">
              <h1>Dashboard</h1>
            </Route>
            <Route exact path="/analytics/reports">
              <h1>Reports</h1>
            </Route>
            <Route exact path="/analytics/eigene-reports">
              <h1>Eigene-Reports</h1>
            </Route>
            <Route exact path="/analytics/centricity">
              <h1>Centricity</h1>
            </Route>
            <Route exact path="/analytics/plug-ins">
              <h1>Plug-Ins</h1>
            </Route>
            <Route exact path="/cross-sell">
              <h1>Cross-Sell</h1>
            </Route>
            <Route exact path="/cross-sell/dashboard">
              <h1>Dashboard</h1>
            </Route>
            <Route exact path="/cross-sell/katalog">
              <h1>Katalog</h1>
            </Route>
            <Route exact path="/cross-sell/widgets">
              <h1>Widgets</h1>
            </Route>
            <Route exact path="/cross-sell/kampagnen">
              <h1>Kampagnen</h1>
            </Route>
            <Route exact path="/cross-sell/reports">
              <h1>Reports</h1>
            </Route>
          </Switch>
          <div className="footer">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
