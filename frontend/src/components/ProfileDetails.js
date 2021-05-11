import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Paper } from '@material-ui/core';
import AppApi from '../api/AppApi';
import ContextErrorMessage from './dialogs/ContextErrorMessage';
import LoadingProgress from './dialogs/LoadingProgress';

class ProfileDetails extends Component {

  constructor(props) {
    super(props);

    
    this.state = {
      Profile: null,
      loadingInProgress: false,
      loadingError: null,
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = () => {
    AppApi.getAPI().getProfile(this.props.profileID).then(profile =>
      this.setState({
        profile: profile,
        loadingInProgress: false,
        loadingError: null
      })).catch(e =>
        this.setState({ 
          profile: null,
          loadingInProgress: false,
          loadingError: e
        })
      );

    this.setState({
      loadingInProgress: true,
      loadingError: null
    });
  }

  render() {
    const { classes, profileID } = this.props;
    const { profile, loadingInProgress, loadingError } = this.state;

    return (
      <Paper variant='outlined' className={classes.root}>

        <Typography variant='h6'>
          Profile
        </Typography>
        <Typography> className={classes.profileEntry}
          ID: {profileID}
        </Typography>
        {
          profile ?
            <Typography>
              Profile: {profile.getName()}, {profile.getAge()}, {profile.getAdress()}, {profile.getSemester()}, {profile.getDegreeCourse()}
                       {profile.getPreferences()}, {profile.getPersonId()};
            </Typography>
            : null
        }
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage error={loadingError} contextErrorMsg={`The data of profile id ${profileID} could not be loaded.`} onReload={this.getProfile} />
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  accountEntry: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  }
});

ProfileDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  StudentID: PropTypes.string.isRequired,
  ProfileID: PropTypes.string.isRequired,
}

export default withStyles(styles)(ProfileDetails);
