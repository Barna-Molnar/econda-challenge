import React from 'react';
import './App.scss';
import Login from './Login';
import SideMenu from './SideMenu';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { users } from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      user: undefined,
      language: 'DE',
    };
    this.languageSwitch = this.languageSwitch.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  languageSwitch() {
    this.setState({
      user: this.state.user,
      language: this.state.language === 'EN' ? 'DE' : 'EN',
    });
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  logIn(userName) {
    const language = this.state.language;
    const user = users.find((user) => user.userName === userName);
    window.localStorage.setItem('state', JSON.stringify({ language, user }));

    this.setState({
      user,
      language,
    });
  }

  logOut() {
    this.setState({
      user: undefined,
    });
    this.props.history.push('/');
    localStorage.clear();
  }

  render() {
    return (
      <div className="App">
        <Login
          logIn={this.logIn}
          logOut={this.logOut}
          user={this.state.user}
          languageSwitch={this.languageSwitch}
          language={this.state.language}
        />

        <div className="App__menu__container">
          <SideMenu user={this.state.user} language={this.state.language} />
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            {!this.state.user ? (
              <Redirect to="/" />
            ) : (
              <>
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
              </>
            )}
          </Switch>
          <div className="footer">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
