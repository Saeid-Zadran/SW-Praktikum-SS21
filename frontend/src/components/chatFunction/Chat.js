import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import ChatSideBar from './ChatSideBar';
import './ChatSideBar.css';
import AppApi from '../../api/AppApi';
import ChatBO from '../../api/ChatBO';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardActions from '@material-ui/core/CardActions';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

const styles = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class ChatBox extends Component {
  state = {
    learnGroupId: 0,
    chatAdvanced: [],
    learngroups: [],
    chat: [],
    chatName: '',
  };
  componentDidMount() {
    this.loadChatPage();
  }

  async loadChatPage() {
    let uid = '';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${'uid'}=`);

    if (parts.length === 2) uid = parts.pop().split(';').shift();
    let app = new AppApi();
    let session_id = await app.getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    
    var learnProfile = await app.getLearnProfileViaUrl(session_id);
    let profile = await app.getProfileViaUrl(session_id);
    learnProfile = learnProfile[0];
    profile = profile[0];
    let groupOwner = false

    let learngroups = await app.getLearnGroupByPersonId(session_id);
    let fetchedChatAdvanced = [];
    let chatName = '';
    if (learngroups.length > 0)
    {
      fetchedChatAdvanced = await app.getChatsByLearnGroupId(learngroups[0].id);
      if (learngroups.length > 0) chatName = learngroups[0].name;
      if(learngroups[0].person_id == session_id) groupOwner = true
    }
      
    this.setState({ learngroups: learngroups });
    this.setState({ personId: session_id });
    this.setState({ name: profile.name });
    this.setState({ chatName: chatName });
        if (learngroups.length > 0) this.setState({ learnGroupId: learngroups[0].id})
    this.setState({groupOwner : groupOwner})
    this.setState({session_id: session_id})

    // wennn die Lerngruppen nicht leer sind
    if (fetchedChatAdvanced.length > 0) {
      this.setState({ chatAdvanced: fetchedChatAdvanced });
    }
  }
  render() {
    const { classes } = this.props;

    const doSomething = (inputArray) => {
      this.setState({ chatAdvanced: inputArray });

      // Do something with your array of strings in here
    };
    const loadFreshPage = function () {
      this.loadChatPage();
    };
    const leaveChat = async () => {
      let app = new AppApi();

      if(this.state.groupOwner)
      {
       app.deleteLearnGroup(this.state.learnGroupId) 
       this.loadChatPage()

      }
      else
      {
        console.log("asdasdsad")
        let allGroupRequests  =  await app.getGroupRequestByPersonId(this.state.session_id)
        console.log(allGroupRequests)
        for(var key in allGroupRequests)
        {
          console.log(allGroupRequests[key], this.state.learnGroupId)
          let grouprequest = allGroupRequests[key]
          if(grouprequest.learngroup_id == this.state.learnGroupId)
          {
            console.log(grouprequest.id)
            await app.deleteGroupRequestById(grouprequest.id)
            this.loadChatPage()
          }
        }
      }

    };
    const updateChatWindow = (chatAdvanced, learnGroupId, chatName, learnGroupProfileID) => {
      
      let groupOwner = false
      if(learnGroupProfileID == this.state.session_id) groupOwner = true

      this.setState({
        chatAdvanced: chatAdvanced,
        learnGroupId: learnGroupId,
        chatName: chatName,
        groupOwner: groupOwner
      });
      
    };

    let informationForChats;

    if (this.state.chatAdvance == false) {
      
      informationForChats = (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Du hast noch keinen Chat!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gehe auf die Matches Page und trete Gruppen bei oder suche
              verwandte Lernprofile um einen Chat zu starten.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              to={`/SecondPage/MatchingPage`}
              variant="outlined"
              size="small"
              color="primary"
            >
              Zu den Matches
            </Button>
          </CardActions>
        </Card>
      );
    }
    return (
      <div class="columns  is-fullheight">
        <div class="column is-fullheight is-one-third">
          <ChatSideBar getChatWindow={updateChatWindow}></ChatSideBar>{' '}
        </div>

        <section className="hero  column">
          <AppBar border={0} elevation={0} position="static" color="default">
            <Toolbar variant="dense">
              <Typography color="gray" className={classes.title}>
                {this.state.chatName}
              </Typography>
              <Button onClick={leaveChat} color="primary">{!this.state.groupOwner  ?   "Chat Verlassen": "Chat auflösen"  }</Button>
            </Toolbar>
          </AppBar>

          <div className="column scrollable">
            <div className="hero-body ">
              {informationForChats}
              <Messages name={this.state.name} chat={this.state.chatAdvanced} />
            </div>

            <div className="hero-foot"></div>
          </div>
          <footer className="section is-small">
            <Chat
              name={this.state.name}
              chatAdvanced={doSomething}
              learnGroupId={this.state.learnGroupId}
            />
          </footer>
        </section>
      </div>
    );
  }
}

const Chat = ({ chatAdvanced, learnGroupId, name }) => (
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const value = `; ${document.cookie}`;
      let parts = value.split(`; ${'uid'}=`);
      let uid = '';
      if (parts.length === 2) {
        uid = parts.pop().split(';').shift();
      }
      var api = AppApi.getApi();
      let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
      session_id = session_id[0].id;
      // let learngroup_id = await AppApi.getApi().learngr(session_id)
      parts = value.splt;
      
      var chat = new ChatBO();
      chat.setLearnGroupId(learnGroupId);
      chat.setIsAccepted(true);
      chat.setSender(name);
      chat.setMessage(e.target.elements.userInput.value);
      // 
      let response = await api.addChat(chat);
      let fetchedChatAdvanced = await api.getChatsByLearnGroupId(learnGroupId);
      chatAdvanced(fetchedChatAdvanced);
      
      

      //saveMsg(e.target.elements.userInput.value);
      e.target.reset();
    }}
  >
    <div className="field  has-addons">
      <div className="control is-expanded">
        <input
          className="input"
          name="userInput"
          type="text"
          placeholder="Type your message"
        />
      </div>
      <div className="control">
        <button className="button is-info">Send</button>
      </div>
    </div>
  </form>
);

const Messages = ({ chat, name }) => (
  <div className="is-danger" style={{ heigth: '100%', width: '100%' }}>
    {chat.map((m, i) => {
      var msgClass = false;
      if (m.sender == name) {
        msgClass = false;
      } else {
        msgClass = true;
      }
      // for demo purposes, format every other msg
      return (
        <div>
          <p
            style={{
              padding: '.25em',
              textAlign: msgClass ? 'left' : 'right',
              overflowWrap: 'normal',
            }}
          ></p>
          <p
            style={{
              padding: '.25em',
              textAlign: msgClass ? 'left' : 'right',
              overflowWrap: 'normal',
            }}
          >
            <span key={i} className={` is-size-7	 `}>
              {m.sender}
            </span>

            <div>
              {' '}
              <span
                key={i}
                className={`tag is-medium ${
                  msgClass ? 'is-success' : 'is-info'
                }`}
              >
                {m.message}
              </span>
            </div>
          </p>
        </div>
      );
    })}
  </div>
);

export default withStyles(styles)(ChatBox);
