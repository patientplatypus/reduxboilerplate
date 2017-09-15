import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducersCombined from './Redux/reducers'
import Adder from './components/Adder'
import TextBox from './components/TextBox'

let store = createStore(reducersCombined)



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Adder store={store} />
          <TextBox store={store} />
        </div>
      </Provider>
    );
  }
}

export default App;
