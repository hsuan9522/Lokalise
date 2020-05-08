import React, {useState} from 'react';

import Header from './components/header';
import CreateProjectModal from './components/createProjectModal';
import Project from './components/project'


const App = () => {
  const [project, setProject] = useState([]);

  function onSave(val) {
    const tmp = [...project];
    tmp.push(val);
    setProject(tmp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="container my-4">
        <CreateProjectModal onClick={onSave}></CreateProjectModal>
        {
          project.map(el=>{
            return (
              <div key={el.name}>
                <div className="py-3 my-3">
                  <Project data={el}></Project>
                </div>
                <hr />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
