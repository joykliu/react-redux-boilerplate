import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'containers/Routes';

const About = () => (
  <div>
    <h1>About</h1>
    { Routes }
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  </div>
);

export default About;

