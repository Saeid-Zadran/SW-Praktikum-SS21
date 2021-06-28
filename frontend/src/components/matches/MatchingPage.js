import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
//import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from 'react-router-dom';
import AppApi from '../../api/AppApi';
import ContextErrorMessage from '../dialogs/ContextErrorMessage';
import LoadingProgress from '../dialogs/LoadingProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GroupProposal from '../matches/GroupProposal';

class MatchingPage extends Component {
  constructor(props) {
    super(props);

    let expandedID = null;

    if (this.props.location.expandLearnGroup) {
      expandedID = this.props.location.expandLearnGroup.getID();
    }

    // Init an empty state
    this.state = {
      learnGroup: [
          {
              "learnGroup_id": 0,
              "name": "Die fleißigen Lerner"
          },
          {
            "learnGroup_id": 1,
            "name": "Anfänger"
        },
        {
            "learnGroup_id": 2,
            "name": "Almans"
        },
      ],
      error: null,
      loadingInProgress: false,
      expandedProfileID: expandedID,
      showProfileForm: false,
      
    };
  }
  


  getLearnGroups = () => {
    AppApi.getApi()
      .getLearnGroups()
      .then((learnGroupBOs) => {
        this.setState({
          learnGroup: learnGroupBOs,
          filteredLearnGroup: [...learnGroupBOs],
          loadingInProgress: false,
          error: null,
          testState: ""
        });
      })
      .catch((e) =>
        this.setState({
          learnGroup: [],
          loadingInProgress: false,
          error: e,
        })
      );

    this.setState({
      loadingInProgress: true,
      error: null,
    });
  };

  componentDidMount() {
    this.getLearnGroups();
  }

  

  
  render() {
    const { classes } = this.props;
    const { learnGroup, loadingInProgress, error } = this.state;
    const handleClick = async () => {


        let testVariable = await  AppApi.getApi().getGroupRequestByPersonId(1)

        console.log(testVariable)
        this.setState({
            testState: "jimmy"
          })
      };
    return (
      <div>
        <Grid  container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <Grid item>
                <Card flat className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Deine persöhnlichen Lernprofil
                    </Typography>
                    <Typography  variant="h5" component="h2">
                     Vorschläge
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    </Typography>
                    <Typography  m={5} variant="body2" component="p">
                      Hier kannst du Personen finden die ein
                      <br/> ähnliches Lernprofil haben wie du!

                      <br />
                    </Typography>
                    {learnGroup.map((learnGroup) => (
                    <GroupProposal  title={learnGroup.name} id={learnGroup.id} ></GroupProposal>

        ))}
                  </CardContent>
       
                </Card>{' '}
              </Grid>
              <Grid item>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {this.state.testState}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={error}
          contextErrorMsg={`The list of learnGroups could not be loaded.`}
          onReload={this.getLearnGroup}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  profileFilter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

MatchingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MatchingPage));
