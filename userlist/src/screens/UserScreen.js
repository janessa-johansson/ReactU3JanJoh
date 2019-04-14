// The main screen/view for the User Screen, used in routing. Uses hook and useEffect
// to fetch users from the API with the help of withHttoRequests.

// Material UI styling imports.
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// Main functionality imports.
import React, { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import withHttpRequests from '../services/withHttpRequests';
import PropTypes from "prop-types";

// Function component passing props with two hooks to deal with users and the
// address toggle.
function UserScreen(props) {

  UserScreen.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    fetchUser: PropTypes.func
  };

  // Hooks for setting user and toggling address.
  const [user, setUser] = useState({});
  const [showAddress, addressToggle] = useState(false);

  // Custom Material UI theme.
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c2185b',
      }
    }
  });

  // useEffect hook to fetch the users from Softhouse's API and setting the single user data with
  // setUser state hook based on the id number in params.
  useEffect(() => {
    props.fetchUser(props.match.params.id)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  // Conditional for show address button with corresponding Material UI button.
  const show = 'Show Address'
  const hide = 'Hide Address'
  const buttonMessage = showAddress ? <span>{hide}</span> : <span>{show}</span>;
  const icon = showAddress ? <CloseIcon className="icon"/> : <AddIcon className="icon"/>

  // Function to toggle the address state.
  const toggleAddress = () => {
    addressToggle(!showAddress);
  }

  // If the param id matches, render the card/single user data.
  if (props.match.params.id) {
    return (
      <CardComponent value="user">
        <div>
          <img src="http://placekitten.com/200/200" alt="a cute kitten"/>
          <Typography component="h2" variant="headline" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="caption" gutterBottom>
            Username: {user.username}
          </Typography>
          <Typography variant="caption" gutterBottom>
            Email: {user.email}
          </Typography>
          {showAddress &&
            <div>
              <hr />
              
              <Typography variant="caption" gutterBottom align="center">
                {user.address.city}
              </Typography>
              <Typography variant="caption" gutterBottom align="center">
                {user.address.street}
              </Typography>
              <Typography variant="caption" gutterBottom align="center">
                {user.address.suite}
              </Typography>
            </div>
          }
          <hr />
          <MuiThemeProvider theme={theme}>
            <div className="addressbutton">
              <Button variant="contained" color="primary" onClick={toggleAddress}><span>{buttonMessage}</span>{icon}</Button>
            </div>
          </MuiThemeProvider>
        </div>
      </CardComponent>
    );
  } else
  return (
    <CardComponent value="users">
      <p>404: User not found.</p>
    </CardComponent>
  );
}

export default withHttpRequests(UserScreen);