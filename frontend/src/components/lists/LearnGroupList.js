import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles,Button,TextField,InputAdornment,IconButton,Grid,Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import AppApi from "../../api/AppApi";
import ContextErrorMessage from "../dialogs/ContextErrorMessage";
import LoadingProgress from "../dialogs/LoadingProgress";
import LearnGroupListEntry from "./LearnGroupListEntry";

class LearnGroupList extends Component {
  constructor(props) {
    super(props); 

    let expandedID = null;

        if (this.props.location.expandLearnGroup) {
          expandedID = this.props.location.expandLearnGroup.getID();
        }

    // Init an empty state
    this.state = {
      learnGroup: [],
      filteredLearnGroup: [],
      LearnGroupFilter: '',
      error: null,
      loadingInProgress: false,
      expandedProfileID: expandedID,
      showProfileForm: false,
    };
  }

  getLearnGroups = () => {
    AppApi.getApi()
      .getLearnGroups()
      .then((learnGroupBOs) =>{
        this.setState({
          learnGroup: learnGroupBOs,
          filteredLearnGroup: [...learnGroupBOs],
          loadingInProgress: false,
          error: null,
        }) }

      )
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



  filterFieldValueChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      filteredLearnGroup: this.state.learnGroup.filter((learnGroup) => {
        let NameContainsValue = learnGroup.getName().toLowerCase().includes(value);
        let PersonIDContainsValue = learnGroup.getPersonId().toLowerCase().includes(value);

        return (
          NameContainsValue ||
          PersonIDContainsValue
        );
      }),
      learnGroupFilter: value,
    });
  };

  clearFilterFieldButtonClicked = () => {
    this.setState({
      filteredLearnGroup: [...this.state.learnGroup],
      LearnGroupFilter: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { learnGroup, loadingInProgress, error} = this.state;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.LearnGroupFilter}
          container
          spacing={1}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs />
          <Grid item>
          </Grid>
        </Grid>
        {learnGroup.map((learnGroup) => (
          <LearnGroupListEntry
            key={learnGroup.getID()} 
            learnGroup={learnGroup}
          />
        ))}
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
    width: "100%",
  },
  profileFilter: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
});

  LearnGroupList.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LearnGroupList));