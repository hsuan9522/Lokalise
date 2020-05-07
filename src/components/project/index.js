import React, { useState, useEffect } from 'react'

import LangBlock from './langBlock';
import './index.scss';

import languageList from '../../config/language.json';

const Project = (props) =>{
  const [lang, setLang] = useState([]);

  useEffect(()=>{
    const baselang = languageList.find(el=>el.code==props.data.baseLanguage)
    setLang([baselang]);
  }, [])

  return (
    <div className="row mt-4">
      <div className="col-3 border-right border-grey">
        <h5 className="border-bottom border-grey py-1">{props.data.name}</h5>
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