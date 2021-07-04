import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';
import AppApi from '../../api/AppApi';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import LearnGroupBO from '../../api/LearnGroupBO';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  sizeAvatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  removeButton: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  proposals: {
    margin: theme.spacing(1),
  },
});

class PersonProposal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learngroups: null,
      selected: false,
      anchorEl: '',
    };
  }
  componentDidMount() {
  }

  someEventHandler = (e) => {
    e.preventDefault();
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  async addLearnGroup(name, person_id) {
    var learnGroup = new LearnGroupBO();
    learnGroup.setName(name);
    learnGroup.setPersonId(person_id);

    var api = AppApi.getApi();
    // 
    let learnGroups = await api.addLearnGroup(learnGroup);
    return learnGroups;
  }


  render() {
    const { classes } = this.props;
    const { title, person_id, id, is_accepted, refresh_page } = this.props;

    const handleClick = async () => {
      let uid = '';
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${'uid'}=`);
      if (parts.length === 2) uid = parts.pop().split(';').shift();
      let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
      session_id = session_id[0].id;
      
      let request_json = {
        id: 0,
        creation_time: '2021-06-28T19:41:33.064Z',
        is_accepted: false,
        learngroup_id: id,
        person_id: session_id,
      };

      let fetchedChatAdvanced = await AppApi.getApi().addGroupRequest(
        request_json
      );
      console.log(this.props)
      this.props.refresh_page()
    };

    return (
      this.props.is_accepted !== true ? 
      <Card className={classes.proposals} m="2rem" pt={3}>
        <List>
          <ListItem selected={this.state.selected}>
            <LinearProgress determinate color="secondary" value={0.7} />
            <ListItemAvatar small>
       
              <Avatar
                className={classes.sizeAvatar}
                alt=""
                src={`https://eu.ui-avatars.com/api/?background=random&color=fff&name=${title}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={`Matched zu ${this.props.percent}%`}
            />
          </ListItem>
          <ListItem>
            <Button  disabled={(is_accepted === false)} onClick={handleClick} variant="outlined">
              {is_accepted !== false ? "Anfrage verschicken" : "Warten auf Annahme"}
            </Button>
          </ListItem>
        </List>
      </Card>
      :
      <div></div>
    );
  }
}

export default withStyles(styles)(PersonProposal);
