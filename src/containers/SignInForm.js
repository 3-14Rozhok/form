import React, { useEffect, useState } from 'react';

import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SignInButton from '../components/SignInButton';
import CheckBox from '../components/CheckBox';
import classes from './SignInForm.css';


const SignInForm = props => {

  const [ emailInput, setEmailInput ]  = useState('');
  const [ passInput, setPassInput ]  = useState('');

  useEffect(() => {
    console.log('email passed to form: ', emailInput);
    console.log('password passed to form: ', passInput);
  });

  const signInHandler = () => {
    console.log('signIn triggered');
    
    //
  }

  const checkBoxHandler = () => {
    console.log('checkbox triggered');
    
    //
  }

  return (
      <div className={classes.form}>
        <EmailInput setEmail={setEmailInput}/>
        <PasswordInput setPass={setPassInput}/>
        <SignInButton onclick={signInHandler}/>
        <CheckBox check={checkBoxHandler}/>
      </div>
  );
}

export default SignInForm;