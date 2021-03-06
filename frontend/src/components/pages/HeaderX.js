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
      value: value
    })
  };

  render() {
    const { person } = this.props;

    return (
      <Paper variant='outlined' >
        <ProfileDropDown person={person} />
        <Typography variant='h3' component='h1' align='center'>
        </Typography>
        <AppBar border={0}  elevation={0} position="static" color="default">
        <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto">

              <Tab  label='Chat' component={RouterLink} to={`/SecondPage/SendMessage`} />
              <Tab label='Matches' component={RouterLink} to={`/SecondPage/MatchingPage`} />


              
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