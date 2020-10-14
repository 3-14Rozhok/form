import React, { useState } from 'react';

import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SignInButton from '../components/SignInButton';
import CheckBox from '../components/CheckBox';
import classes from './SignInForm.css';


const SignInForm = () => {

  const validatePass = () => {
    if(passInput.length > 3) {
      return true;
    } 
    return false;
  };

  const validate = () => {
    if(validateEmail() && validatePass()){
      return true;
    } 
    return false;
  };

  const zeroPass = () => {
    if(passInput.length === 0) {
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailInput);
  };

  // Check if there is old email
  let email = '';
  const oldEmail = localStorage.getItem('email') || '';

  // If there is no old email
  if(oldEmail === '') {
    // Generating random email
    let alphabet = 'abcdefghijklmnopqrstuxywz1234567890._', randomEmail = '';
    for(let i = 0; i < 7; i++){
      randomEmail += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    randomEmail += '@gmail.com';
    email = randomEmail;
  } else {
    // Else take old email
    email = oldEmail;
  };

  const [ emailInput, setEmailInput ]  = useState(`${email}`);
  const [ passInput, setPassInput ]  = useState('');
  const [ check, setCheck ] = useState(true);


  const signInHandler = () => {
    // Write email locally
    localStorage.setItem('email', emailInput);
    // Log object
    let message = { mail: emailInput, password: passInput, checked: check };
    console.log(message);
  };

  const setCheckHandler = () => {
    if(check) {
      setCheck(false);
    } else setCheck(true);
  };

  return (
      <div className={classes.form}>
        <EmailInput setEmail={setEmailInput} emailInput={emailInput} validate={validateEmail}/>
        <PasswordInput passInput={passInput} setPass={setPassInput} validate={validatePass}/>
        <SignInButton onclick={signInHandler} validate={validate}/>
        <CheckBox zeroPass={zeroPass} check={check} setCheckHandler={setCheckHandler}/>
      </div>
    );
  };

export default SignInForm;