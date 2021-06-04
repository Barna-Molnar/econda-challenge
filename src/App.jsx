import './App.scss';
import React from 'react';
import Login from './Login';
import SideMenu from './SideMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { users } from './data.js';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      user: {},
    };

    this.getUser = this.getUser.bind(this);
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  getUser(obj) {
    const user = users.find((user) => user.group === obj.userName);
    if (obj.isUser === true) user.isUser = obj.isUser;

    this.setState({
      user: user,
    });
  }
  // getMarkup() {
  //   const items = createMenuItems(this.state.user, menus);
  //   const markup = items.map((obj) => generateMarkup(obj)).join('');
  //   this.setState({
  //     markup: markup,
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Login getUser={this.getUser} />

        <SideMenu user={this.state.user} />
        <Router>
          <div className="content">
            <Switch>
              {/* <Route exact path="/">
                <h1>Home</h1>
              </Route> */}
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
