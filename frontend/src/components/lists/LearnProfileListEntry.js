import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';






class LearnProfileListEntry extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      learnProfile: props.learnProfile,
    };
  }





  render() {
    const { classes} = this.props;
    const { learnProfile } = this.state;

    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <Grid container spacing={1} justify='flex-start' alignItems='center'>
              <Grid item>
                <Typography variant='body1' className={classes.heading}>
                  Lernstatus:           {learnProfile.getStudyStatus()}<br></br>
                  Häufigkeit:           {learnProfile.getFrequency()}<br></br>
                  Vorwissen:            {learnProfile.getPrevKnowledge()}<br></br>
                  Gruppengröße:         {learnProfile.getGroupSize()}<br></br>
                  Extrovertiert:        {learnProfile.getExtroversion()}<br></br>
                  ProfileId:            {learnProfile.getProfileId()}<br></br>
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

LearnProfileListEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  learnProfile: PropTypes.object.isRequired,
}

export default withStyles(styles)(LearnProfileListEntry);
