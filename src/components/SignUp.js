import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import { Redirect } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

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
    backgroundColor: grey[900],
    color: 'white',
  },
}));

function SignUp() {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatpassword: '',
    username: '',
    phone: 0,
    city: '',
  });

  useEffect(() => {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        console.log('validation');
        return false;
      }
      return true;
    });
    return () => {
      // remove rule when it is not needed
      ValidatorForm.removeValidationRule('isPasswordMatch');
      console.log('removevalidation');
    };
  }, []);

  const handleOnChange = event => {
    console.dir(event.target.id);
    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    localStorage.getItem('userID') ? <Redirect to='/'></Redirect> :
      <div style={{
        marginTop: '10vh', width: '50%', marginLeft: 'auto', marginRight: 'auto'
      }}>
        <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)}>
          <Typography variant='h4'>Register Your Account</Typography>
          <InputField
            type={'email'}
            id={'email'}
            label={'email'}
            value={'email'}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
            className={classes.inputfield}
          >
            {'Email'}
          </InputField>
          <InputField
            type={'password'}
            id={'password'}
            value={'password'}
            label={'password'}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
            className={classes.inputfield}
          >
            {'Password'}
          </InputField>
          <br />
          <InputField
            type={'username'}
            id={'username'}
            name={'username'}
            value={'username'}
            label={'user name'}
            onChange={handleOnChange}
          >
            {'Username'}
          </InputField>
          <InputField
            type="password"
            name="repeatpassword"
            value={'repeatpassword'}
            id={'repeatpassword'}
            label="Repeat password"
            onChange={handleOnChange}
            validators={['isPasswordMatch', 'required']}
            errorMessages={['password mismatch', 'this field is required']}
          >
            {'Confirm Password'}
          </InputField>
          <br />

          <InputField
            type={'phone'}
            name={'phone'}
            value={'phone'}
            id={'phone'}
            label={'phone number'}
            onChange={handleOnChange}
          >
            {'Phone Number'}
          </InputField>
          <InputField
            type={'city'}
            name={'city'}
            id={'city'}
            value={'city'}
            label={'city'}
            onChange={handleOnChange}
          >
            {'City'}
          </InputField>
          <br />
          <Button type="submit" variant="outlined" className={classes.submitButton}>
            Create new account
        </Button>
        </ValidatorForm>
      </div>
  );
}

export default SignUp;
