import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Tabs, Tab, AppBar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ProfileDropDown from '../dialogs/ProfileDropDown';



class HeaderX extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleTabChange = (e, value) => {
    this.setState({
      value
    })
  };

  render() {
    const { person } = this.props;
    const { value } = this.state

    return (
      <Paper variant='outlined' >
        <ProfileDropDown person={person} />
        <Typography variant='h3' component='h1' align='center'>
        </Typography>
        <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto">


              <Tab label='Lerngruppe erstellen' component={RouterLink} to={`/SecondPage/CreateLearnGroup`} />
              <Tab label='Lernprofil erstellen' component={RouterLink} to={`/SecondPage/CreateLearnProfile`} />
              <Tab label='Lernprofile' component={RouterLink} to={`/SecondPage/LearnProfileList`} />
              <Tab label='Lerngruppen' component={RouterLink} to={`/SecondPage/LearnGroupList`} />
              <Tab label='Alle Profile' component={RouterLink} to={`/SecondPage/ProfileList`} />
              <Tab label='Chat' component={RouterLink} to={`/SecondPage/SendMessage`} />
              <Tab label='Nachricht' component={RouterLink} to={`/SecondPage/MessageList`} />

              
            </Tabs>
          </AppBar>
      </Paper>
    )
  }
}

HeaderX.propTypes = {
  person: PropTypes.object,
}

export default HeaderX;