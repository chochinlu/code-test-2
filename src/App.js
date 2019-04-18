import React, { Component } from 'react';
import Menu from './components/Menu';
import Information from './components/Information';
import Flight from './components/Flight';
import AddFlightForm from './components/AddFlightForm';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Information />
        <Flight />
        <AddFlightForm />
      </div>
    );
  }
}

export default App;
