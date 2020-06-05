import React from 'react'
import { Link } from 'react-router-dom';
import LoginModal from './loginModal'

const Header = () =>{
  return(
    <div className="bg-light p-3 justify-content-between d-flex">
      <div>
        <Link to={"/"} className="logo-btn">
          <i className="fas fa-heading"></i>&ensp;
           WebsiteName
        </Link>
      </div>
      <div>
        Menu
      </div>
      <div>
        <LoginModal></LoginModal>
      </div>
      {/* <div>
        <i className="far fa-user-circle"></i>
        member
      </div> */}
    </div>
  ) 
}

export default Header;