import React, { useState } from 'react';
import classes from './PasswordInput.css';


const PasswordInput = props => {

  const [ passInput, setPassInput ] = useState('111');

  const passChangeHandler = value => {
    setPassInput(`${value}`);
    props.setPass(`${value}`);
  };

  return (
    <input 
      id={classes.pass} 
      value={passInput} 
      onChange={event => passChangeHandler(event.target.value)} />
  );
}

export default PasswordInput;