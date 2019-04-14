// Imports main functionality from React, styles from Wrapper module and
// Button and Card from Material Design.

// Style/Material Design imports
import style from '../style/Card.module.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Router/Functionality and PropTypes imports
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';

// Const for Material Design Custom Green Login Button Palette
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7cb342',
    }
  }
})

// Basic class with constructor and info state as boolean/and PropTypes
class CardComponent extends Component {

  static propTypes = {
    history: PropTypes.object,
    children: PropTypes.any, //props.children can be undefined and an object
    parent: PropTypes.any, //props.parent can be undefined and a string
    match: PropTypes.object,
    value: PropTypes.string,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  // Toggles the show info state for login component
  toggleShow = () => {
    this.setState(state => ({ showInfo: !state.showInfo }));
  };

  // Route change to Dashboard after clickin the login button
  routeChange = () => {
    this.props.history.push('/dashboard')
  };

  render() {

    // Ternary for show/hide info button text
    const show = 'Show info'
    const hide = 'Hide info'
    const buttonText = this.state.showInfo ? <span>{hide}</span> : <span>{show}</span>;

    // Show info JSX with Material Design Typography
    const showInfo =
      <div>
        <Typography variant="subheading" gutterBottom>
          Login to see content.
        </Typography>
      </div>

    // Login JSX with onClick routeChange to dashboard screen. Uses Material Design.
    const login =
      <div>
        <TextField variant="filled" type="text" />
        <MuiThemeProvider theme={theme}>
          <div className={style["loginbutton"]}>
            <Button variant="contained" color="primary" onClick={this.routeChange}>Login</Button>
            <hr />
          </div>
        </MuiThemeProvider>
      </div>

    // If props.value from the parent (UserScreen) matches, show a particular card
    // with a correct css. If the props.location is true, show user params. Otherwise,
    // show the "No user selected." message. 

    // Material Design Card with several conditionals and toggles, as explained above.
    // 1) props.parent = Login Screen component
    // 2) props.children = any children that uses the Card component (i.e. edit/show users functionality)

    return (
      <Fragment>
        <Card className={this.props.parent || this.props.value ? 'login' : 'card'}>
          {this.props.children}
          {this.props.parent && login}
          {this.state.showInfo && this.props.parent && showInfo}
          {this.props.parent && <Button variant="contained" onClick={this.toggleShow}>{buttonText}</Button>}
        </Card>
      </Fragment>
    )
  };
}

export default withRouter(CardComponent);