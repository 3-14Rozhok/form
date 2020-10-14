import React, { useState } from 'react';
import classes from './PasswordInput.css';


const PasswordInput = props => {

  const [count, setCount] = useState(0);

  const passChangeHandler = value => {
    props.setPass(`${value}`);
    setCount(count + 1);
  };

  if((!props.validate() && count === 0) || props.validate()){
    return (
      <div>
      <input 
        id={classes.pass} 
        value={props.passInput} 
        onChange={event => passChangeHandler(event.target.value)} />
        <div id={classes.pass_error}></div>
      </div>
    );
  } else {
    return (
      <div>
        <input 
        id={classes.pass} 
        value={props.passInput} 
        onChange={event => passChangeHandler(event.target.value)} />
        <div id={classes.pass_error}>Invalid password</div>
      </div>
    );
  }
};

export default PasswordInput;