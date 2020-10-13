import React, { useState } from 'react';
import classes from './PasswordInput.css';


const PasswordInput = () => {
  const [ passInput, setPassInput ] = useState('111');
  return (
    <input 
      id={classes.pass} 
      value={passInput} 
      onChange={event => setPassInput(event.target.value)} />
  );
}

export default PasswordInput;