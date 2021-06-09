import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';






class LearnGroupListEntry extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      profile: props.profile,
    };
  }





  render() {
    const { classes} = this.props;
    const { profile } = this.state;

    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <Grid container spacing={1} justify='flex-start' alignItems='center'>
              <Grid item>
                <Typography variant='body1' className={classes.heading}>
                  Name:           {profile.getName()}<br></br>
                  Alter:          {profile.getAge()}<br></br>
                  Adresse:        {profile.getAdress()}<br></br>
                  Semester:       {profile.getSemester()}<br></br>
                  Studiengang:    {profile.getDegreeCourse()}<br></br>
                  Vorlieben:      {profile.getPreferences()}<br></br>
                  {/* PersonId:       {profile.getPersonId()}<br></br> */}



                </Typography>
              </Grid>
              <Grid item>
              </Grid>
              <Grid item xs />
            </Grid>
          </AccordionSummary>
        </Accordion>
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
}

export default withStyles(styles)(LearnGroupListEntry);
