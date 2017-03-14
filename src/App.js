import React, { Component } from 'react';
import SchoolCard from './components/SchoolCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <SchoolCard />
      </div>
    );
  }
}

export default App;
