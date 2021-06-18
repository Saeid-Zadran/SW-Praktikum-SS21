import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import { Button, ButtonGroup } from '@material-ui/core';






class LearnGroupListEntry extends Component {

  constructor(props) {
    super(props);

    // Init the state
    this.state = {
      learnGroup: props.learnGroup,
    };
  }





  render() {
    const { classes} = this.props;
    const { learnGroup } = this.state;

    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <Grid container spacing={1} justify='flex-start' alignItems='center'>
              <Grid item>
                <Typography variant='body1' className={classes.heading}>
                  Name:           {learnGroup.getName()}<br></br>
                  Person ID:      {learnGroup.getPersonId()}<br></br>
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

LearnGroupListEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  learnGroup: PropTypes.object.isRequired,
}

export default withStyles(styles)(LearnGroupListEntry);
