import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Item from './components/Item';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap">
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>
          <Route path="/item" component={Item}/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
      </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
