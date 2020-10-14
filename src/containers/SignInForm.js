import React, { useState } from 'react';

import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import SignInButton from '../components/SignInButton';
import CheckBox from '../components/CheckBox';
import classes from './SignInForm.css';
import ReactDOM from 'react-dom';


const SignInForm = props => {

  const validatePass = pass => {
    if(pass.length > 4) {
      return true;
    } else {
      return false;
    }
  }

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validate = () => {
    if(validateEmail(emailInput) && validatePass(passInput)){
      return true;
    } else {
      return false;
    }
  }

  const zeroPass = () => {
    if(passInput.length < 5) {
      return false
    } else {
      return true
    }
  }
  
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
  }

  const [ emailInput, setEmailInput ]  = useState(`${email}`);
  const [ passInput, setPassInput ]  = useState('');
  const [ check, setCheck ] = useState(true);


  const checkBoxHandler = () => {
    // do something
  }

  const signInHandler = () => {
    // Write email locally
    localStorage.setItem('email', emailInput);
    let message = { mail: emailInput, password: passInput };
    console.log(message);
  }

  return (
      <div className={classes.form}>
        <EmailInput setEmail={setEmailInput} emailInput={emailInput}/>
        <PasswordInput setPass={setPassInput}/>
        <SignInButton onclick={signInHandler} validate={validate}s/>
        <CheckBox zeroPass={zeroPass} checkHandler={checkBoxHandler} check={check}/>
      </div>
  );
}

export default SignInForm;