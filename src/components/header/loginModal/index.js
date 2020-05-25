import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NAME_RE } from 'xmlchars/xml/1.0/ed5';

const LoginModal = () => {
  const initData = {
    email: '',
    name: '',
    password: '',
    confirmPwd: '',
  }
  const [{ email, name, password, confirmPwd }, setData] = useState(initData);
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSingUpOpen] = useState(false);
  

  function onChange(e) {
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  function handleClose(type){
    switch(type){
      case 'login':
        setOpen(false);
        break;
      case 'sign':
        setSingUpOpen(false);
        break;
    }
  }

  function handleClickOpen(type){
    switch (type) {
      case 'login':
        setSingUpOpen(false);
        setOpen(true);
        break;
      case 'sign':
        setOpen(false);
        setSingUpOpen(true);
        break;
    }
  }

  function signUp(){
    //TODO sign up
    console.log(name,email,password,confirmPwd)
  }

  function login(){
    //TODO login api here
    console.log(email,password)
    // console.log(email,password)
  }

  return (<div>
    <Button variant="outlined" color="primary" onClick={()=>handleClickOpen('login')}>
      Login
    </Button>
    <Dialog open={open} onClose={()=>handleClose('login')} aria-labelledby="form-dialog-title" fullWidth maxWidth="xs">
      <DialogTitle id="form-dialog-title" className="text-center">Login</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          name="email"
          onChange={onChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="password"
          label="Password"
          type="password"
          onChange={onChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions className="d-flex justify-content-between">
        <Button onClick={()=>handleClickOpen('sign')} color="primary">Sign Up</Button>
        <div>
          <Button onClick={()=>handleClose('login')} color="primary">
            Cancel
          </Button>
          <Button onClick={login} color="primary">
            Login
            </Button>
        </div>
      </DialogActions>
    </Dialog>

    <Dialog open={signUpOpen} onClose={()=>handleClose('sign')} aria-labelledby="form-dialog-title" fullWidth maxWidth="xs">
      <DialogTitle id="form-dialog-title" className="text-center">Sign Up</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          fullWidth
          onChange={onChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          onChange={onChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          onChange={onChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="confirmPwd"
          label="Confirm Password"
          type="password"
          fullWidth
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions className="d-flex justify-content-between">
        <Button onClick={()=>handleClickOpen('login')} color="primary">Login</Button>
        <div>
          <Button onClick={()=>handleClose('sign')} color="primary">
            Cancel
          </Button>
          <Button onClick={signUp} color="primary">
            Sign Up
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  </div>)
}

export default LoginModal;