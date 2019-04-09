// Imports index.css as global and typeface-roboto font for Material Design.
import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';

import './index.css';
import 'typeface-roboto';

// Renders Navbar Component, which is the main entry point to the app.
class App extends Component {
  
  render() {
    return (
      <div>
          <NavbarComponent />   
      </div>
    )};
}

export default App;
