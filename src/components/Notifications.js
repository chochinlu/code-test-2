import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing.unit,
    fontSize: 20
  }
});

const InfoSnakBar = ({ classes, msg }) => {
  const [open, setOpen] = useState(true);

  const msgBlock = (
    <span className={classes.message}>
      <InfoIcon className={classes.icon} />
      {msg}
    </span>
  );

  const actionBlock = (
    <IconButton
      key="close"
      aria-label="Close"
      color="inherit"
      className={classes.close}
      onClick={() => setOpen(false)}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={6000}
    >
      <SnackbarContent
        // className={classes.info}
        onClose={() => setOpen(false)}
        message={msgBlock}
        action={actionBlock}
      />
    </Snackbar>
  );
};

const InfoSnakBarWrapper = withStyles(styles)(InfoSnakBar);

const Notifications = ({ error }) => {
  if (!error) return null;

  return (
    <>
      {Object.keys(error).map(k => (
        <InfoSnakBarWrapper key={k} msg={`[${k}] ${error[k]}`} />
      ))}
    </>
  );
};

function mapStateToProps(state) {
  return {
    error: state.error
  };
}

export default connect(mapStateToProps)(Notifications);
