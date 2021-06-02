import './App.scss';
import React from 'react';
import Login from './Login';
import SideMenu from './SideMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { users, menus } from './data.js';

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
    this.state = {
      userData: {},
    };

    this.b = this.b.bind(this);
  }

  b(obj) {
    // var menus = [];
    var user = users.find((user) => user.group === obj.userName);
    if (obj.isUser === true) user.isUser = obj.isUser;

    console.log(user);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Login test={this.b} />

          <SideMenu />
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
              <Route exact path="/cross-sell">
                <h1>Cross-Sell</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
