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
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

const dayFormat = today => format(today, 'EEE, MMM dd');

const HomeLink = props => <RouterLink to="/" {...props} />;
const AddLink = props => <RouterLink to="/add_flight" {...props} />;

const Menu = ({ classes, today = new Date() }) => {
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Grid container justify="flex-start" alignItems="baseline">
            <Grid item xs={5}>
              <Typography>
                <Link component={HomeLink} underline="none" variant="h6">
                  Flight Table
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="subtitle2">
                {dayFormat(today)}, Asia/Taipei
              </Typography>
            </Grid>
          </Grid>

          <Link component={AddLink}>
            <IconButton aria-label="Add" color="primary">
              <AddIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Menu);
