import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Login from './Login';

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
    this.state = {};

    this.b = this.b.bind(this);
  }

  b(obj) {
    console.log(obj);
  }

  render() {
    return (
      <div className="App">
        <Login test={this.b} />
      </div>
    );
  }
}

export default App;
