import React from 'react';
import classes from './CheckBox.css';

const CheckBox = props => {

  return (
    <div> 
      <input
      id={classes.checkbox}
      type="checkbox"
      onClick={event => props.check()} />
      <p id={classes.remember}>Remember me</p>
    </div>
    
  );
}

export default CheckBox;