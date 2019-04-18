import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import Information from './components/Information';
import Flight from './components/Flight';
import AddFlightForm from './components/AddFlightForm';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Menu />
        <Information />
        <Flight />
        <AddFlightForm />
      </div>
    );
  }
}

export default App;
