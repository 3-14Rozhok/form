import React, { useState } from 'react';
import classes from './EmailInput.css';


const EmailInput = () => {

  const [ emailInput, setEmailInput ]  = useState('123@mail');

  const emailChangeHandler = value => {
    setEmailInput(value);
  }  

  return (
    <input 
      id={classes.email} 
      value={emailInput} 
      onChange={event => emailChangeHandler(event.target.value)} />
  );
}

export default EmailInput;