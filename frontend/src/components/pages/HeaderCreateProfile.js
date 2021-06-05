import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Tabs, Tab } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ProfileDropDown from '../dialogs/ProfileDropDown';



class HeaderCreateProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabindex: 0
    };
  }

  handleTabChange = (e, newIndex) => {
    this.setState({
      tabindex: newIndex
    })
  };

  render() {
    const { user } = this.props;

    return (
      <Paper variant='outlined' >
        <ProfileDropDown user={user} />
        <Typography variant='h3' component='h1' align='center'>
        </Typography>
       
            <Tabs indicatorColor='primary' textColor='primary' centered value={this.state.tabindex} onChange={this.handleTabChange} >
              <Tab label='Profile' component={RouterLink} to={`/StartPage/ProfileList`} />
              
            </Tabs>
      </Paper>
    )
  }
}

HeaderCreateProfile.propTypes = {
  user: PropTypes.object,
}

export default HeaderCreateProfile;