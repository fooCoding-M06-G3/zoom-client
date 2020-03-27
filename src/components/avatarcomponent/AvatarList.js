import React, { useState, Fragment } from 'react';
import SelectSubCategory from './SelectSubCategory';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Avatarlist = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className="avatarstyle" onClick={handleClickOpen}>
        {<img alt="Not available" src={props.src} />}
        <p> {props.name}</p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select sub-category</DialogTitle>
        <DialogContent>
          <SelectSubCategory id={props.id} name={props.name} categoryid={props.categoryid} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Avatarlist;
