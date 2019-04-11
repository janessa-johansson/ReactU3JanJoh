// CSS and Material Design Imports
import style from '../style/Navbar.module.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Router and core functionality from react.
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import React, { Component } from 'react'

// Existing component imports.
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import UserScreen from '../screens/UserScreen';
import Notfound from '../components/NotFound';

// Handles all functionality for the Navbar and routing, including Navlinks,
// Switch, Routes, and Redirect from /user to /login.
export default class NavbarComponent extends Component {
    render() {
        return (
            <Router>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <NavLink to="/login" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">Login</Button>
                            </div>
                        </NavLink>
                        <NavLink to="/dashboard" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">Dashboard</Button>
                            </div>
                        </NavLink>
                        <NavLink to="/user" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">User</Button>
                            </div>
                        </NavLink>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path="/" component={LoginScreen} />
                    <Route exact path="/dashboard" component={DashboardScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/user/:id" component={UserScreen} />
                    <Route exact path="/user" render={() => (
                        <Redirect to="/login" />
                    )} />
                    <Route component={Notfound} />
                </Switch>
            </Router>

        )
    }
}
