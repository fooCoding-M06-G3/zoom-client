import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
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
    width: '35%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default function SignUp() {


  const [values, setValues] = useState({
    username: '',
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
      username: values.username,
      email: values.email,
      password: values.password,
      tel: values.tel
    }
    fetch('https://api-zoom.herokuapp.com/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', }

    })
      .then(res => res.json())
      .then(result => {
        console.log(result.sqlMessage);
        values.msg = result.sqlMessage
        setValues({ ...values })
      })
  };

  const classes = useStyles();

  return (


    <Card className={classes.card} >

      <CardContent style={{
        width: '70%', marginLeft: '15%', marginTop: '5%'
      }}>
        <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)} >
          <Typography style={{ marginBottom: 20, fontSize: '1.7em' }}>Register Your Account</Typography>
          {values.msg.includes('Registeration') && < Typography variant='h6' style={{ marginBottom: 20, color: 'green' }}>Registeration Done</Typography>}
          {values.msg.includes('Duplicate') && < Typography variant='h6' style={{ marginBottom: 20, color: 'red' }}>Email alreay registered</Typography>}

          {values.error && <Typography className={classes.error}>Email/Password Invalid</Typography>}
          <TextValidator
            variant='outlined'
            type='username'
            id='username'
            placeholder='User Name'
            value={values.username}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <br />
          <TextValidator
            variant='outlined'
            type='email'
            id='email'
            placeholder='Email'
            value={values.email}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['This field is required', 'email is not valid']}
          />
          <br />
          <TextValidator
            variant='outlined'
            type='text'
            id='tel'
            placeholder='Phone Number: 07xxxxxxx'
            value={values.tel}
            onChange={handleOnChange}
            validators={['required', 'matchRegexp:^\\d+$', 'minNumber:255',]}
            errorMessages={['This field is required', 'only numbers are accepted', 'Minmum 10 digists number']}
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
            errorMessages={['This field is required']}
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

