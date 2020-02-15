import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from './comonents/Wrapper'
import Projects from './comonents/Projects';
import Bio from './comonents/Bio';
import Nav from './comonents/Nav';
import Logo from './comonents/Logo';


function App() {
    return (
    <Router>
    <div className="App">
        <Nav />
      <Wrapper>
        <Route exact path="/" component={Logo} />
        <Route exact path="/about" component={Bio} />
        <Route exact path="/portfolio" component={Projects} />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
