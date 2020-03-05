import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputfield: {
    position: 'relative',
    fontSize: '12px',
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '300px',
    maxWidth: '100%',
    padding: '20px 20px',
    height: '70px',
  },
}));
function InputField(props) {
  const classes = useStyles();
  return (
    <div className={classes.inputfield}>
      <TextValidator
        id={props.id}
        label={props.label}
        name={props.name}
        type={props.type}
        variant="outlined"
      />
    </div>
  );
}
export default InputField;
