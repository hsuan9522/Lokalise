import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h3>Home page</h3>
      <Link to="/project">Project</Link>
    </div>
  )
}

export default Home;