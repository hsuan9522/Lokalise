import React, { useState, useEffect } from 'react'

import AddLang from './addLang';
import LangBlock from './langBlock';
import './index.scss';

import languageList from '../../config/language.json';

const Project = (props) =>{
  const [lang, setLang] = useState([]);

  useEffect(()=>{
    const baselang = languageList.find(el=>el.code==props.data.baseLanguage)
    setLang([baselang]);
  }, [])

  function addLanguage(val){
    let allLang =  [];
    val.forEach(e => {
      const tmp = languageList.find(el => el.code == e)
      if(tmp) allLang.push(tmp);
    });
    setLang(allLang)
  }

  return (
    <div className="row">
      <div className="col-3 border-right border-grey">
        <h4 className="border-bottom border-grey py-1">{props.data.name}</h4>
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
          {/* <div className="col-6">
            <small>ISSUES</small>
            <h4>95</h4>
          </div> */}
        </div>
      </div>
      <div className="col-9 row">
        {
          lang.map(el=>{
            return <LangBlock data={el} key={props.data.name+'_'+el.country}></LangBlock>
          })
        }
        <AddLang baseLang={props.data.baseLanguage} onClick={addLanguage}></AddLang>
      </div>
    </div>
  )
}

export default Project;