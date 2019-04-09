// The main screen/view for the User Screen, used in routing. Value prop is for 
// css only, to show the correct card.

import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';

class UserScreen extends Component {
  
  render() { 
    
    return (
      <div>
      <CardComponent value="users" />
      </div>
    )
  }
}

export default UserScreen;