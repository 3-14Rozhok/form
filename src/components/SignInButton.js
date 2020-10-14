import React from 'react';

import classes from './SignInButton.css';

const SignInButton = props => {

  return (
    <button 
    id={classes.button} 
    onClick={event => props.onclick()}>
    Sign In
    </button>
  );
}

export default SignInButton;