import React from 'react';
import classes from './CheckBox.css';

const CheckBox = props => {

  return (
    <input 
    type="checkbox"
    id={classes.checkbox} 
    onClick={event => props.check()} />
  );
}

export default CheckBox;