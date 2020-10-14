import React from 'react';
import classes from './CheckBox.css';

const CheckBox = props => {

  if(props.zeroPass()){
    return (
      <div> 
        <input
        id={classes.checkbox}
        type="checkbox"
        defaultChecked={props.check}
        onClick={event => props.checkHandler()} />
        <p id={classes.remember}>Remember me</p>
      </div>
    );
  } else {
    return (
      <div> 
        <input
        id={classes.checkbox}
        type="checkbox"
        disabled

        onClick={event => props.checkHandler()} />
        <p id={classes.remember}>Remember me</p>
      </div>
    );
  }
}

export default CheckBox;