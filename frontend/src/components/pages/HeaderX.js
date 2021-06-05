import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Tabs, Tab } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ProfileDropDown from '../dialogs/ProfileDropDown';



class HeaderX extends Component {

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
              <Tab label='LearnGroup' component={RouterLink} to={`/SecondPage/CreateLearnGroup`} />
              <Tab label='LearnProfile' component={RouterLink} to={`/SecondPage/CreateLearnProfile`} />

              
            </Tabs>
      </Paper>
    )
  }
}

HeaderX.propTypes = {
  user: PropTypes.object,
}

export default HeaderX;