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
    let users = this.props.showUsers;

    // Massive conditional return showing inactive/active users depending on active/inactive state (showState prop).
    // Includes router link, display info (id, name, isActve).
    // Returns conditional rendering for color based on props from Dashboard.
    return (
      <div>
        {
          users.map((user) => {
            return (
              <p key={user.name}>
                <Link to={{
                  pathname: `/user/${user.id}`,
                  state: { redirect: true }
                }}
                  style={{ textDecoration: 'none', color: this.props.showColor === true ? 'blue' : 'red' }}
                ><span>{user.name}</span><br />
                </Link></p>
            )
          })
        }
      </div>
    )
  };
}

export default UserComponent;
