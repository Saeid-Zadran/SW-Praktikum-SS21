import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import AppApi from '../../api/AppApi';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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

class GroupProposal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learngroups: null,
      selected: false,
      anchorEl: '',
    };
  }
  localStorageUpdated() {}
  someEventHandler = (e) => {
    
    e.preventDefault();
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  render() {
    const { classes } = this.props;
    const { title, subtitle, id,  } = this.props;
    const handleClick = async () => {
      let uid = '';
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${'uid'}=`);
      
      if (parts.length === 2) uid = parts.pop().split(';').shift();
      let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
      session_id = session_id[0].id;
      let request_json =     {
        "id": 0,
        "creation_time": "2021-06-28T19:41:33.064Z",
        "is_accepted": false,
        "learngroup_id": this.props.id,
        "person_id": session_id
      }
      

      let fetchedChatAdvanced = await AppApi.getApi().addGroupRequest(
        request_json
      );
      
    };

    return (
      <Card className={classes.proposals} m="2rem" pt={3}>
        <List >
          <ListItem selected={this.state.selected}>
            <ListItemAvatar small>
              <Avatar
                className={classes.sizeAvatar}
                alt=""
                src={`https://eu.ui-avatars.com/api/?background=random&color=fff&name=${title}`}
              />
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
          <ListItem>
            <Button onClick={handleClick} variant="outlined">Gruppe beitreten</Button>
          </ListItem>
        </List>
      </Card>
    );
  }
}

export default withStyles(styles)(GroupProposal);
