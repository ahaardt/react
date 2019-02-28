import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
const store = ConfigureStore();

class App extends Component {



  render() {
    return (
      //Enclosed in BrowserRouter to make use of React Navigation links
      //Enclose in provider for Redux
        <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
          <Main />
          </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
