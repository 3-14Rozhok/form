import React from 'react';

import classes from './SignInButton.css';
import SubmitForm from '../containers/SignInForm';


const SignInButton = () => {
  const buttonHandler = () => {
    console.log('Button was clicked');
    // do something
  }
  return (
    <button id={classes.button} onClick={event => buttonHandler()}>Sign In</button>
  );
}

export default SignInButton;