import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import AppApi from '../../api/AppApi'

const styles = theme => ({
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
});





 class ChatGroups extends Component  {
  


constructor(props) {
    super(props);

    this.state = {
      learngroups: null,
      selected: false
    };
    
  }
  localStorageUpdated(){

    }

    
  
  
    
  
  render()

  {
      
    const { classes } = this.props;
    const {title, subtitle} = this.props;
    const handleClick = async () => {
      
      let fetchedChatAdvanced =  await AppApi.getApi().getChatsByLearnGroupId(this.props.id)
      this.props.getChatWindow(fetchedChatAdvanced, this.props.id)



    }

    const getRenderingState = () => {

    
}






    

    return (
    <List className={classes.root}>
      <ListItem button  selected={this.state.selected}  onClick={handleClick} alignItems="flex-start">
        <ListItemAvatar small>
          <Avatar   
          className={classes.sizeAvatar}
  alt=""src={`https://eu.ui-avatars.com/api/?name=${title}`} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {subtitle}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
  );}
  
}

export default withStyles(styles) (ChatGroups);