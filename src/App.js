import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header';

import Project from './pages/project';
import Home from './pages/home';
import ProjectDetail from './pages/projectDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header></Header>
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/project" exact component={Project} />
          <Route path="/project/:id" component={ProjectDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
