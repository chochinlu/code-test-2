import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import Information from './components/Information';
import Flight from './components/Flight';
import AddFlightForm from './components/AddFlightForm';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Information />
        <Flight />
        <AddFlightForm />
      </MuiThemeProvider>
    );
  }
}

export default App;
