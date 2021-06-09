import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles,Button,TextField,InputAdornment,IconButton,Grid,Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import AppApi from "../api/AppApi";
import ContextErrorMessage from "./dialogs/ContextErrorMessage";
import LoadingProgress from "./dialogs/LoadingProgress";
import LearnProfileListEntry from "./LearnProfileListEntry";

class LearnProfileList extends Component {
  constructor(props) {
    super(props); 

    let expandedID = null;

        if (this.props.location.expandLearnProfile) {
          expandedID = this.props.location.expandLearnProfile.getID();
        }

    // Init an empty state
    this.state = {
      learnProfile: [],
      filteredLearnProfile: [],
      LearnProfileFilter: '',
      error: null,
      loadingInProgress: false,
      expandedLearnProfileID: expandedID,
      
    };
  }

  getLearnProfiles = () => {
    AppApi.getApi()
      .getLearnProfiles()
      .then((LearnProfileBOs) =>{
        this.setState({
          learnProfile: LearnProfileBOs,
          filteredLearnProfile: [...LearnProfileBOs],
          loadingInProgress: false,
          error: null,
        }) }

      )
      .catch((e) =>
        this.setState({
          learnProfile: [],
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
    this.getLearnProfiles();
  }



  filterFieldValueChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      filteredLearnProfile: this.state.learnProfile.filter((learnProfile) => {
        let StudyStatusContainsValue = learnProfile.getStudyStatus().toLowerCase().includes(value);
        let FrequencyContainsValue = learnProfile.getFrequency().toLowerCase().includes(value);
        let PrevKnowledgeContainsValue = learnProfile.getPrevKnowledge().toLowerCase().includes(value);
        let GroupSizeContainsValue = learnProfile.getGroupSize().toLowerCase().includes(value);
        let ExtroversionContainsValue = learnProfile.getExtroversion().toLowerCase().includes(value);
        let ProfileIdContainsValue = learnProfile.getProfileId().toLowerCase().includes(value);

        return (
          StudyStatusContainsValue ||
          FrequencyContainsValue ||
          PrevKnowledgeContainsValue ||
          GroupSizeContainsValue ||
          ExtroversionContainsValue ||
          ProfileIdContainsValue
        );
      }),
      LearnProfileFilter: value,
    });
  };

  clearFilterFieldButtonClicked = () => {
    this.setState({
      filterLearnProfile: [...this.state.learnProfile],
      LearnProfileFilter: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { learnProfile, loadingInProgress, error} = this.state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.learnProfileFilter}
          container
          spacing={1}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs />
          <Grid item>
          </Grid>
        </Grid>
        {learnProfile.map((learnProfile) => (
          <LearnProfileListEntry
            key={learnProfile.getID()} 
            learnProfile={learnProfile}
          />
        ))}
        <LoadingProgress show={loadingInProgress} />
        <ContextErrorMessage
          error={error}
          contextErrorMsg={`The list of profile could not be loaded.`}
          onReload={this.getLearnProfiles}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  LearnProfileFilter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

LearnProfileList.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LearnProfileList));