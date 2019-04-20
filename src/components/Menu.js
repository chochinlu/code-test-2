import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { format } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

const dayFormat = today => format(today, 'EEE, MMM dd');

const HomeLink = props => <RouterLink to="/" {...props} />;
const AddLink = props => <RouterLink to="/add_flight" {...props} />;

const Menu = ({ classes, today = new Date() }) => (
  <div className={classes.grow}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography className={classes.grow}>
          <Link component={HomeLink} underline="none" variant="h6">
            Flight Table ({dayFormat(today)})
          </Link>
        </Typography>
        <Link component={AddLink}>
          <IconButton aria-label="Add" color="primary">
            <AddIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Menu);
