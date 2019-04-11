import React from 'react';

function withHttpRequests(WrappedComponent){
  
  return class extends React.Component{
    fetchUser = (id) => {
      return fetch(`http://api.softhouse.rocks/users/${id}`, {
        method: 'GET'
      })
    }

    render(){
      return <WrappedComponent fetchUser={this.fetchUser} {...this.props} />
    }
  }
}

export default withHttpRequests;