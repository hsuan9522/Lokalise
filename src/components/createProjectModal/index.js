import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import languageList from '../../config/language.json';

const CreateProjectModal = (props) => {
  const initForm = {
    name: '',
    description: '',
    baseLanguage: 'en'
  }
  const [formData, setFormData] = useState(initForm)
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState({
    name: null,
    baseLanguage: null
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function onSave() {
    let validateCount = 0;
    for(let i in validation){
      if (formData[i] == '') {
        validateCount++;
        setValidation(prevState => ({ ...prevState, [i]: true }));
      }else{
        setValidation(prevState => ({ ...prevState, [i]: false }));
      }
      if(validateCount>0) return false;
    }
    props.onClick(formData)
    setOpen(false);
    setFormData(initForm);
  }
  
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        New Porject
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-add-project">Add Project</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            variant="outlined"
            margin="dense"
            id="name"
            label="Project name"
            fullWidth
            value={formData.name}
            onChange={onChange}
            required
            error={validation.name}
          />
          <TextField
            name="description"
            variant="outlined"
            margin="dense"
            id="description"
            label="Description"
            multiline
            rows={3}
            rowsMax={3}
            fullWidth
            value={formData.description}
            onChange={onChange}
          />
          <TextField
            name="baseLanguage"
            variant="outlined"
            id="baseLanguage"
            margin="dense"
            select
            label="Select"
            fullWidth
            value={formData.baseLanguage}
            onChange={onChange}
            required
          >
            {languageList.map((el) => (
              <MenuItem key={el.code} value={el.code}>
                {el.label}({el.country})
              </MenuItem>
            ))}
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

export default CreateProjectModal;