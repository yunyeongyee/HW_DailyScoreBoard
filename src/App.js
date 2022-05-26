import React from 'react';
import { Route } from 'react-router-dom';

import Section from './Section';
import Detail from './Detail';
import './App.css';

function Header() {
  return (
    <>
      <header className="Header">
        <h1>HOMEWORK</h1>
      </header>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/" exact>
        <Section />
      </Route>

      <Route path="/detail/:id">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
