import React, { useState } from 'react'

const LangBlock = (props) =>{
  console.log('langBlock.js', props)
  return (
    <div className="col-4">
      <div className="d-flex align-center border-bottom border-grey py-1 my-1">
        <span className={"flag-icon flag-icon-"+props.data.country}></span>
        <h6 className="pl-2 mb-0 font-weight-normal">{props.data.title}</h6>
      </div>
      <div>
        <small>DONE</small>
        <h4>90%</h4>
      </div>
    </div>
  )
}

export default LangBlock;