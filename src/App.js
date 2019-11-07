import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Stephanie'
  }

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
