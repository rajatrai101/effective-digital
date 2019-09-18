import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';

import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          X
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomizedDialogs = (props) => {
  const [open, setOpen] = React.useState(props.isDialogOpen);
  const handleClose = () => {
      setOpen(false);
      props.onClose();
  };

  return (
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.Title}
        </DialogTitle>
          <DialogContent dividers>
          <CardMedia
        component="img"
          alt={props.Title}
          image={props.ImageURLs.FullSize}
          title={props.Title}
              />
          
            <Typography gutterBottom variant="h6" component="h2">
                Family: {props.Family}
          </Typography>      
          <Typography gutterBottom>
          {props.Description}
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
  );
}

export default CustomizedDialogs;