// The main screen/view for the User Screen, used in routing. Value prop is for 
// css only, to show the correct card.

import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import React, { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent';
import withHttpRequests from '../services/withHttpRequests';

function UserScreen(props) {

  const [user, setUser] = useState({});
  const [showAddress, addressToggle] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c2185b',
      }
    }
  });

  useEffect(() => {
    props.fetchUser(props.match.params.id)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  const show = 'Show Address'
  const hide = 'Hide Address'
  const buttonMessage = showAddress ? <span>{hide}</span> : <span>{show}</span>;
  const icon = showAddress ? <CloseIcon className="icon"/> : <AddIcon className="icon"/>

  const toggleAddress = () => {
    addressToggle(!showAddress);
  }

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