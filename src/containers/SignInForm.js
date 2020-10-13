import React, { useState } from 'react';

import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/SignInButton';
import classes from './SignInForm.css';


const SignInForm = props => {

  // const [ inputState, setInputState ] = useState({mail: '123', password: '111', check: true});

  const submitHandler = () => {
    // do something
  }

  return (
      <div className={classes.form}>
        <EmailInput />
        <PasswordInput />
        <SubmitButton />
      </div>
  );
}

export default SignInForm;