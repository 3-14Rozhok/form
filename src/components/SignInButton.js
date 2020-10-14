import React from 'react';

import classes from './SignInButton.css';

const SignInButton = props => {

  if(props.validate()){
    return (
      <button 
      id={classes.button} 
      onClick={event => props.onclick()}>
      Sign In
      </button>
    );
  } else {
    return (
      <button 
      id={classes.button} >
      Sign In
      </button>
    );
  }

}

export default SignInButton;