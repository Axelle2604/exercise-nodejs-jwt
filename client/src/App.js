import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/userInfo" component={User} />
      </BrowserRouter>
    </div>
  );
}

export default App;
