import React, {useState} from 'react';

import CreateProjectModal from '../components/createProjectModal';
import ProjectBlock from '../components/project'


const Project = () => {
  const [project, setProject] = useState([]);

  function onSave(val) {
    let tmp = [...project];
    tmp.push(val);

    //暫時手動給id，之後應該由後端回傳
    let tmpId = 1;
    tmp = tmp.map(el=>{
      el.id = tmpId++;
      return el;
    })
    
    setProject(tmp);
  }

  return (
      <div className="container my-4">
        <CreateProjectModal onClick={onSave}></CreateProjectModal>
        {
          project.map(el=>{
            return (
              <div key={el.name}>
                <div className="py-3 my-3">
                  <ProjectBlock data={el}></ProjectBlock>
                </div>
                <hr />
              </div>
            )
          })
        }
      </div>
  );
}

export default Project;
