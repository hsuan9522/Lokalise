import React from 'react'

const Header = () =>{
  return(
    <div className="bg-light p-3 justify-content-between d-flex">
      <div>
        <i className="fas fa-heading"></i>
        WebsiteName
      </div>
      <div>
        Menu
      </div>
      <div>
        <i className="far fa-user-circle"></i>
        member
      </div>
    </div>
  ) 
}

export default Header;