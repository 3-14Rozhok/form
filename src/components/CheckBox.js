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
        onChange={props.setCheckHandler} />
        <p id={classes.remember}>Remember me</p>
      </div>
    );
  } else {
    return (
      <div> 
        <input
        id={classes.checkbox}
        type="checkbox"
        defaultChecked={props.check}
        disabled/>
        <p id={classes.remember}>Remember me</p>
      </div>
    );
  }
};

export default CheckBox;