import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

import languageList from '../../config/language.json';

const AddLang = (props) => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState([]);

  useEffect(()=>{
    setLang([props.baseLang])
  },[])

  function handleClick(){
    setOpen(true)
  }

  function handleClose(){
    setOpen(false);
  }

  function onChange(event){
    const {value} = event.target;
    setLang(value);
  }

  function onSave(){
    if(lang.length===0) return false;
    props.onClick(lang);
    setOpen(false);
  }

  return (
    <div>
      <Button className="add-lang-btn m-3" size="small" variant="contained" onClick={handleClick}>Add language</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-add-lang">Add Language</DialogTitle>
        <DialogContent className="add-lang-dialog">
          <TextField
            name="lang"
            variant="outlined"
            id="lang"
            margin="dense"
            select
            label="Select"
            fullWidth
            SelectProps={{ multiple:true,}}
            value={lang}
            onChange={onChange}
          >
            {
              languageList.map((el) => (
                <MenuItem key={el.code} value={el.code}>
                  {el.label}
                </MenuItem>
              ))
            }
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddLang;