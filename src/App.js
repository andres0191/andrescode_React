import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home  from './components/Home/Home';
import About from './components/About/About';
import Porjects from './components/Porjects/Projects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/Projects'>
          <Porjects />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
