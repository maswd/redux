import React from 'react';
import './App.css'
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Number from './components/Number';
import User from './components/User';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
        <Number />
        <User/>
      </div>
    </Provider>
  );
};

export default App;