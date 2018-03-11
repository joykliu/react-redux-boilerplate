import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'containers/Routes';

const App = () => (
  <div>
    <h1>App</h1>
    { Routes }
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  </div>
);

export default App;

