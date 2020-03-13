import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { Card, CardContent, Button, Typography, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
    backgroundColor: '#005b96',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#000',
      border: '1px solid #03396c'
    }
  },
  error: {
    marginTop: 20,
    color: 'red'
  },
  card: {
    marginTop: '10vh',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default function SignUp() {


  const [values, setValues] = useState({
    email: '',
    password: '',
    tel: '',
    error: false,
    msg: ''
  });

  const handleOnChange = event => {

    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);

  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      email: values.email,
      password: values.password,
      tel: values.tel
    }
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', }

    })
      .then(res => res.json())
      .then(result => {
        console.log(result.sqlMessage)
        setValues({ msg: result.sqlMessage })
      })
  };

  const classes = useStyles();

  return (


    <Card className={classes.card} >

      <CardContent style={{
        width: '70%', marginLeft: '10%', marginTop: '5%'
      }}>
        <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)} >
          <Typography style={{ marginBottom: 20, fontSize: '1.7em' }}>Register Your Account</Typography>
          {values.msg.includes('Registeration') && < Typography variant='h6' style={{ marginBottom: 20, color: 'green' }}>Registeration Done</Typography>}
          {values.msg.includes('Duplicate') && < Typography variant='h6' style={{ marginBottom: 20, color: 'red' }}>Email alreay registered</Typography>}

          {values.error && <Typography className={classes.error}>Email/Password Invalid</Typography>}
          <TextValidator
            variant='outlined'
            type='email'
            id='email'
            placeholder='Email'
            value={values.email}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <br />
          <TextValidator
            variant='outlined'
            type='text'
            id='tel'
            placeholder='Phone Number'
            value={values.phoneNumber}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            variant='outlined'
            type='password'
            id='password'
            placeholder='Password'
            value={values.password}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <Button type="submit" variant="filled outlined" className={classes.submitButton}>
            Register
          </Button>
        </ValidatorForm >
      </CardContent >
    </Card>

  );
}

