import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Typography, TextField } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  title: {
    margin: '25px',
    fontSize: '25px',
  },
  submitButton: {
    margin: '40px',
    backgroundColor: '#333',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#000',
      border: '1px solid #CCC'
    }
  },
  error: {
    marginTop: 20,
    color: 'red'
  }
}));

function SignIn() {


  const [values, setValues] = useState({
    email: '',
    password: '',
    error: false,
  });

  const handleOnChange = event => {

    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);

  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/getuser?email=${values.email}&password=${values.password}`)
      .then(res => res.json())
      .then(result => {
        console.log(result[0])
        if (result[0] === undefined) {
          setValues({ error: true })
        } else {
          localStorage.setItem('userId', result[0].userid);
        }
      })
  };

  const classes = useStyles();


  return (

    localStorage.getItem('userID') !== null ? <Redirect to='/' /> :

      <div style={{
        marginTop: '10vh', width: '20%', marginLeft: 'auto', marginRight: 'auto'
      }}>

        < ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)} >
          <Typography variant='h4'>Sign In</Typography>
          {values.error && <Typography className={classes.error}>Email/Password Invalid</Typography>}
          <TextField
            variant='outlined'
            type='email'
            id='email'
            placeholder='Email'
            value={values.email}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          >

          </TextField>
          <br />
          <TextField
            variant='outlined'
            type='password'
            id='password'
            placeholder='Password'
            value={values.password}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          >

          </TextField>
          <br />
          <Button type="submit" variant="filled outlined" className={classes.submitButton}>
            Sign in
        </Button>
        </ValidatorForm >
      </div >
  );
}

export default SignIn;
