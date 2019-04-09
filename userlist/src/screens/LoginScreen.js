// The main screen/view for the Login Screen, used in routing. Parent prop is for 
// css only, to show the correct card.

import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';

export default class LoginScreen extends Component {
    
  render() {
    return ( 
        <CardComponent parent="Login"/>
    )
  }
}

