import React, {Component} from 'react';
import './App.css';

import {createStore} from "redux";
import {Provider} from 'react-redux';

import {FlashCardApp} from './FlashCardApp';
import {flashCardAppStore} from "./FlashCardAppStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={createStore(flashCardAppStore)}>
          <FlashCardApp/>
        </Provider>
      </div>
    );
  }
}

export default App;
