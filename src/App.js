import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components /Home';
import Navbar from './components /Navbar';
import About from  './components /About';
import Project from './components /Project';
import Contact from './components /Contact';
import NoMatch from './components /NoMatch';


class App extends Component {

  render() {
    return (
      
      <div className="App">
      <h1> Welcome to react Recipe Search </h1>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/project' component={Project} />
            <Route path='/contact' component={Contact} />
            <Route path="*" component={NoMatch}/>           
          </Switch> 
        </Router>   
      </div>
    )
  }

}












export default App;
