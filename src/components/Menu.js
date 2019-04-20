import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { format } from 'date-fns';

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

const dayFormat = today => format(today, 'EEE, MMM dd');

const Menu = ({ classes, today = new Date() }) => (
  <div className={classes.grow}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Flight Table ({dayFormat(today)})
        </Typography>
        <IconButton aria-label="Add" color="primary">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Menu);
