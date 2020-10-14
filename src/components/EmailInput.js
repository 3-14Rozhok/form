import React from 'react';
import classes from './EmailInput.css';


const EmailInput = props => {
  
  const emailChangeHandler = value => {
    props.setEmail(`${value}`);
  }; 

  if(props.validate()){
    return (
      <div>
        <input 
        id={classes.email} 
        value={props.emailInput} 
        onChange={event => emailChangeHandler(event.currentTarget.value)} />
      </div>
    );
  } else {
    return (
      <div>
        <input 
        id={classes.email} 
        value={props.emailInput} 
        onChange={event => emailChangeHandler(event.currentTarget.value)} />
        <div id={classes.email_error}>Invalid e-mail</div>
      </div>
    );
  }
};

export default EmailInput;