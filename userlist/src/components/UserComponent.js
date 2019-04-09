// Imports main functionality/router/PropTypes from react.
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


// Maps and renders users as props from Dashboard component.
class UserComponent extends Component {
  static propTypes = {
    showUsers: PropTypes.array,
    showColor: PropTypes.bool,
    isActive: PropTypes.bool,
    showState: PropTypes.bool
  };

  render() {
    // Filters users based on active state and returns users if true, null if false
    let active = this.props.showUsers.filter((users) => {
      return users.isActive ? users : null;
    });

    // Filters users based on inactive state and returns null if true, users if false
    let inactive = this.props.showUsers.filter((users) => {
      return users.isActive ? null : users;
    });

    // Massive conditional return showing inactive/active users depending on active/inactive state (showState prop).
    // Includes router link, display info (id, name, isActve).
    // Returns conditional rendering for color based on props from Dashboard.
    return (
      <div>
        {
          this.props.showState ? active.map((user) => {
            return (
              <p key={user.name}>
                <Link to={{
                  pathname: `/user/${user.name}`,
                  state: { redirect: true }
                }}
                  style={{ textDecoration: 'none', color: this.props.showColor === true ? 'blue' : 'red' }}
                ><span>{user.id}. </span>
                  <span>{user.name}</span><br />
                  <span>User is: {user.isActive ? <span>Active</span> : <span>Inactive</span>}</span>
                </Link></p>
            )
          }) :
            inactive.map((user) => {
              return (
                <p key={user.name}>
                  <Link to={{
                    pathname: `/user/${user.name}`,
                    state: { redirect: true }
                  }}
                    style={{ textDecoration: 'none', color: this.props.showColor === true ? 'blue' : 'red' }}
                  ><span>{user.id}. </span>
                    <span>{user.name}</span><br />
                    <span>User is: {user.isActive ? <span>Active</span> : <span>Inactive</span>}</span>
                  </Link></p>
              )
            }) }
      </div>
    )};
}

export default UserComponent;
