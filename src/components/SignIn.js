import React, { useState } from 'react';
import InputField from './InputField';

function SignIn() {
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
      <form onSubmit={event => handleSubmit(event)}>
        <h4>Sign in</h4>
        <InputField
          type={'email'}
          id={'email'}
          for={'email'}
          placeholder={'email'}
          onChange={handleOnChange}
        >
          {'Email'}
        </InputField>
        <br />
        <InputField type={'password'} id={'password'} for={'password'} onChange={handleOnChange}>
          {'Password'}
        </InputField>
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </fragment>
  );
}

export default SignIn;
