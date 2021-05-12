import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfileForm from './dialogs/ProfileForm';
import ProfileDeleteDialog from './dialogs/ProfileDeleteDialog';




class ProfileListEntry extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      profile: props.profile,
      showProfileForm: false,
      showProfileDeleteDialog: false,
    };
  }


  editProfileButtonClicked = (event) => {
    event.stopPropagation();
    this.setState({
      showProfileForm: true
    });
  }

  profileFormClosed = (profile) => {
    if (profile) {
      this.setState({
        profile: profile,
        showProfileForm: false
      });
    } else {
      this.setState({
        showProfileForm: false
      });
    }
  }

  deleteProfileButtonClicked = (event) => {
    event.stopPropagation();
    this.setState({
      showProfileDeleteDialog: true
    });
  }

  deleteProfileDialogClosed = (profile) => {
    if (profile) {
      this.props.onProfileDeleted(profile);
    };

    this.setState({
      showProfileDeleteDialog: false
    });
  }

  render() {
    const { classes} = this.props;
    const { profile, showProfileForm, showProfileDeleteDialog } = this.state;

    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <Grid container spacing={1} justify='flex-start' alignItems='center'>
              <Grid item>
                <Typography variant='body1' className={classes.heading}>
                  Name:           {Profile.getName()},<br></br>
                  Adresse:        {Profile.getAdress()},<br></br>
                  Semester:       {Profile.getSemester()}<br></br>
                  DegreeCourse:   {Profile.getDegreeCourse()}<br></br>
                  Preferenzen:    {Profile.getPreferences()}<br></br>
                  PersonId:       {Profile.getPersonId()}<br></br>



                </Typography>
              </Grid>
              <Grid item>
                <ButtonGroup variant='text' size='small'>
                  <Button color='primary' onClick={this.editProfileButtonClicked}>
                    edit
                  </Button>
                  <Button color='secondary' onClick={this.deleteProfileButtonClicked}>
                    delete
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs />
            </Grid>
          </AccordionSummary>
        </Accordion>
        <ProfileForm show={showProfileForm} profile={profile} onClose={this.profileFormClosed} />
        <ProfileDeleteDialog show={showProfileDeleteDialog} profile={profile} onClose={this.deleteProfileDialogClosed} />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  }
});

ProfileListEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,

  onProfileDeleted: PropTypes.func.isRequired
}

export default withStyles(styles)(ProfileListEntry);
