import React, { useState } from 'react';
import InputField from './InputField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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

function SignIn() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleOnChange = event => {
    console.dir(event.target.id);
    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);
    console.dir(newValues);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <fragment>
      <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)}>
        <h4 className={classes.title}>Sign in</h4>
        <InputField
          type={'email'}
          id={'email'}
          label={'email'}
          name={'email'}
          onChange={handleOnChange}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        >
          {'Email'}
        </InputField>
        <br />
        <InputField
          type={'password'}
          id={'password'}
          name={'password'}
          label={'password'}
          onChange={handleOnChange}
          validators={['required']}
          errorMessages={['this field is required']}
        >
          {'Password'}
        </InputField>
        <br />
        <Button type="submit" variant="filled" variant="outlined" className={classes.submitButton}>
          Sign in
        </Button>
      </ValidatorForm>
    </fragment>
  );
}

export default SignIn;
