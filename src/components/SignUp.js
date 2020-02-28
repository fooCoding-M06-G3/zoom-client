import React, { useState } from 'react';
import InputField from './InputField';

function SignUp() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confpassword: '',
    username: '',
    phone: 0,
    city: '',
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
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <h4>Become a member</h4>
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
        <InputField type={'password'} id={'password'} for={'password'} onChange={handleOnChange}>
          {'Confirm Password'}
        </InputField>
        <br />
        <InputField type={'username'} id={'username'} for={'username'} onChange={handleOnChange}>
          {'Username'}
        </InputField>
        <br />
        <InputField type={'phone'} id={'phone'} for={'phone'} onChange={handleOnChange}>
          {'Phone Number'}
        </InputField>
        <br />
        <InputField type={'city'} id={'city'} for={'city'} onChange={handleOnChange}>
          {'City'}
        </InputField>
        <br />
        <input type="submit" value="Create new account" />
      </form>
    </div>
  );
}

export default SignUp;
