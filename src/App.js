import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ListComponent } from './components/ListComponent';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ListComponent/>
        <Header><b>Learn React with Ironhack2</b></Header>
      </div>
    );
  }
}