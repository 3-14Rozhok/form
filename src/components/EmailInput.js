import React, { useState } from 'react';
import classes from './EmailInput.css';


const EmailInput = props => {

  const [ emailInput, setEmailInput ]  = useState('123@mail');

  const emailChangeHandler = value => {
    setEmailInput(`${value}`);
    props.setEmail(`${value}`);
  }; 

  return (
    <input 
      id={classes.email} 
      value={emailInput} 
      onChange={event => emailChangeHandler(event.currentTarget.value)} />
  );
}

export default EmailInput;