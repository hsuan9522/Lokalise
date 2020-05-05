import React from 'react';

import Header from './components/header';
import Project from './components/project'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="container">
        <Project></Project>
      </div>
    </div>
  );
}

export default App;
