import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectInfo from './pages/ProjectInfo';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap">
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/project" component={Project}/>
          <Route path="/projectInfo/:num" component={ProjectInfo}/>
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
