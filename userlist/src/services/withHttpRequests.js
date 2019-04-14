import React from 'react';

// HOC that contains functions for single user fetch function (for UserScreen), 
// and function that fetches all users (Dashboard) from Softhouse's API.
// Renders the wrapped component with the data and props.
function withHttpRequests(WrappedComponent){

  return class extends React.Component{
    fetchUsers = () => {
      return  fetch('http://api.softhouse.rocks/users', {
          method: 'GET'
        })
  
      }

    fetchUser = (id) => {
      return fetch(`http://api.softhouse.rocks/users/${id}`, {
        method: 'GET'
      })
    }

    render(){
      return <WrappedComponent fetchUser={this.fetchUser} fetchUsers={this.fetchUsers} {...this.props} />
    }
  }
}

export default withHttpRequests;