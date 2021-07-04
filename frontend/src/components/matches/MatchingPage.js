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
import './Matching.css';

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
      ],
      matchedLearnGroups: 
    [

    ],
      error: null,
      loadingInProgress: false,
      expandedProfileID: expandedID,
      showProfileForm: false,
    };
  }
  checkIfRequestIsAccPending(matchedLearnprofiles) {}

  async getChatGroups() {
    let uid = '';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${'uid'}=`);

    if (parts.length === 2) uid = parts.pop().split(';').shift();
    let app = new AppApi();
    let session_id = await app.getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    let matchedLearnprofiles = await AppApi.getApi().getMatchesByPersonURL(
      session_id
    );
    let matches = [];

    for (var variable in matchedLearnprofiles) {
      let learnProfile = await AppApi.getApi().getProfileViaUrl(variable);
      let allGroupRequests = await AppApi.getApi().getGroupRequestByPersonId(
        variable
      );
      let requestStatus = '';
      for (var grouRequestKey in allGroupRequests) {
        let groupRequest = allGroupRequests[grouRequestKey];
        let learnGroup = null;
        if (groupRequest.person_id == variable) {
          learnGroup = await AppApi.getApi().getLearnGroupById(
            groupRequest.person_id
          );
          if (learnGroup[0].person_id == session_id) {
            requestStatus = groupRequest.is_accepted;
          }
        }
      }
      let matchObject = {
        learnGroup_id: variable,
        name: learnProfile[0].name,
        percent: matchedLearnprofiles[variable],
        id: learnProfile[0].id,
        requestStatus: requestStatus,
      };
      matches.push(matchObject);
    }
    this.setState({ learnGroup: matches });
  }


  async getLearnGroups() {
    let uid = '';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${'uid'}=`);

    if (parts.length === 2) uid = parts.pop().split(';').shift();
    let app = new AppApi();
    let session_id = await app.getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    let matchedLearnprofiles = await AppApi.getApi().getMatchesByLearnGroup(
      session_id
    );
    console.log(matchedLearnprofiles)
    let matches = [];
    console.log(matchedLearnprofiles)
    for (var variable in matchedLearnprofiles) {
      let learnGroup = await AppApi.getApi().getLearnGroupById(variable);
      console.log(learnGroup)
      let allGroupRequests = await AppApi.getApi().getGroupRequestByPersonId(
        variable
      );
      let matchObject = {
        learnGroup_id: variable,
        name: learnGroup[0].name,
        percent: matchedLearnprofiles[variable],
        id: "learnProfile[0].id",
      };
      matches.push(matchObject);
    }
    console.log(matches)

    this.setState({ matchedLearnGroups: matches });
  }

  componentDidMount() {
    this.getChatGroups();
    this.getLearnGroups();
  }

  render() {
    const { classes } = this.props;
    const { learnGroup, loadingInProgress, error, matchedLearnGroups } = this.state;
    const handleClick = async () => {
      let testVariable = await AppApi.getApi().getGroupRequestByPersonId(1);

      console.log(testVariable);
      this.setState({
        testState: 'jimmy',
      });
    };
    return (
      <div>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <Grid item>
                <Card flat className="scrollable">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Deine persöhnlichen Lernprofil
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Vorschläge
                    </Typography>
                    <Typography
                      className={classes.pos}
                      color="textSecondary"
                    ></Typography>
                    <Typography m={5} variant="body2" component="p">
                      Hier kannst du Personen finden die ein
                      <br /> ähnliches Lernprofil haben wie du!
                      <br />
                    </Typography>
                    {learnGroup.map((learner) => (
                      <GroupProposal
                        title={learner.name}
                        id={learner.id}
                        percent={learner.percent}
                        is_accepted={learner.requestStatus}
                      ></GroupProposal>
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
                      Dies sind empfohlene Lerngruppen basierend auf deinem Lernprofil!
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Vorschläge
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      adjective
                    </Typography>
                   
                    {matchedLearnGroups.map((learner) => (
                      <GroupProposal
                        title={learner.name}
                        id={learner.id}
                        percent={learner.percent}
                        is_accepted={learner.requestStatus}
                      ></GroupProposal>
                    ))}
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
