import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import About from './pages/about/about.component.jsx';
import Projects from './pages/projects/projects.component.jsx';
import Contact from './pages/contact/contact.component.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div> 
  );
}

export default App;