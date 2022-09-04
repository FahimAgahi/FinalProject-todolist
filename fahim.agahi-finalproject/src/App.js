import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/configure-store';
import Router from './router/pages';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router />
      </div>
    </Provider>
  )
}

export default App;
