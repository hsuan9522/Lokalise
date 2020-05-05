import React, { useState, useEffect } from 'react'

import LangBlock from './langBlock';
import './index.scss';
const Project = () =>{
  const [lang, setLang] = useState([]);

  useEffect(()=>{
    const fakeLangData = [
      {
        title: 'english',
        country: 'us'
      },
      {
        title: 'japan',
        country: 'jp'
      }
    ]
    setLang(fakeLangData);
  }, [])

  return (
    <div className="row mt-4">
      <div className="col-3 border-right border-grey">
        <h5 className="border-bottom border-grey py-1">Sample Project</h5>
        <div className="row">
          <div className="col-6">
            <small>DONE</small>
            <h4>10%</h4>
          </div>
          <div className="col-6">
            <small>WORLDS</small>
            <h4>123</h4>
          </div>
          <div className="col-6">
            <small>TEAM</small>
            <h4>1</h4>
          </div>
          <div className="col-6">
            <small>KEYS</small>
            <h4>12</h4>
          </div>
          <div className="col-6">
            <small>ISSUES</small>
            <h4>95</h4>
          </div>
        </div>
      </div>
      <div className="col-9 row">
        {
          lang.map(el=>{
            return <LangBlock data={el} key={el.country}></LangBlock>
          })
        }
      </div>
    </div>
  )
}

export default Project;