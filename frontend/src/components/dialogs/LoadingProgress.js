import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
/**
 * Shows a loading progress, if the show prop is true.
 * 
 * @See See Materiel-UIs [Progress](https://material-ui.com/components/progress/)
 * @See See Materiel-UIs [LinearProgress](https://material-ui.com/api/linear-progress/)
 * 
 * @author [Christoph Kunz](https://github.com/christophkunz)
 */
class LoadingProgress extends Component {

  /** Renders the component */
  render() {
    const { classes, show } = this.props;

    return (
      show ?
        <div className={classes.root}>
          <Typography variant="h5" className={classes.title}>
              <div >Du wirst mit Google eingeloggt...</div>
                       
            </Typography>
                      <LinearProgress color='secondary' />
        </div>
        : null
    );
  }
}

/** Component specific styles */
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  }
});

/** PropTypes */
LoadingProgress.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** If true, the loading progress is rendered */
  show: PropTypes.bool.isRequired,
}

export default withStyles(styles)(LoadingProgress);
