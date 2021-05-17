import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Container, CssBaseline, Grid, ThemeProvider, Typography, withStyles} from '@material-ui/core';
import Theme from "../../Theme";
import {BrowserRouter as Router, Redirect, Link, Route} from "react-router-dom";


class Start extends Component {


    render() {
        return(
        <div>
            <center>
                <Typography>
                    Wählen Sie Ihre Rolle:
                </Typography>
                <Link to='/student/profile'>
                    <Button>
                        Student
                    </Button>
               
                </Link>
            </center>
        </div>
);
    }
}

export default Start;


