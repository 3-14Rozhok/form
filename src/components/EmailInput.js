import React, { useEffect, useState } from 'react';
import classes from './EmailInput.css';


const EmailInput = props => {
  
  const [ emailInput, setEmailInput ]  = useState(`${props.emailInput}`);

  const emailChangeHandler = value => {
    setEmailInput(`${value}`);
    props.setEmail(`${value}`);
  }; 


  return (
    <div>
      <input 
      id={classes.email} 
      value={emailInput} 
      onChange={event => emailChangeHandler(event.currentTarget.value)} />
    </div>
    
  );
}

export default EmailInput;