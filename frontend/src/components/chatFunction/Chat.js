import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import ChatSideBar from './ChatSideBar';
import './ChatSideBar.css';
import AppApi from '../../api/AppApi';
import ChatBO from '../../api/ChatBO';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Link as RouterLink } from 'react-router-dom';



class ChatBox extends Component {
  async componentDidMount() {
    let uid = '';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${'uid'}=`);
    if (parts.length === 2) uid = parts.pop().split(';').shift();
    let app = new AppApi();
    let session_id = await app.getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    console.log(session_id);
    var learnProfile = await app.getLearnProfileViaUrl(session_id);
    let profile = await app.getProfileViaUrl(session_id);
    learnProfile = learnProfile[0];
    profile = profile[0];
    console.log(learnProfile);
    let fetchedChatAdvanced = await app.getChatsByLearnGroupId(session_id);
    let learngroups = await app.getLearnGroupByPersonId(session_id);
    this.setState({ learngroups: learngroups })
    this.setState({ personId: session_id });
    this.setState({ name: profile.name });
    console.log(learngroups)
    // wennn die Lerngruppen nicht leer sind 
    if(fetchedChatAdvanced.length > 0)
    {
      // lade den ersten chat ins chatfenster
      //this.setState({chatAdvanced: fetchedChatAdvanced[0]})
    }
  }

  state = {
    learnGroupId: 0,
    chatAdvanced: [],
    learngroups: [],
    chat: []
  };

  render() {
    const doSomething = (inputArray) => {
      this.setState({ chatAdvanced: inputArray });

      // Do something with your array of strings in here
    };
    const updateChatWindow = (chatAdvanced, learnGroupId) => {
      this.setState({ chatAdvanced: chatAdvanced, learnGroupId: learnGroupId });
      console.log(this.state);
    };

    let informationForChats;

    if(this.state.learngroups.length == 0)
    {
      console.log(this.state.learngroups)
      informationForChats = 
      <Card >
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Du hast noch keinen Chat!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gehe auf die Matches Page und trete Gruppen bei oder suche verwandte Lernprofile um einen Chat zu starten.
          </Typography>
        </CardContent>
        <CardActions>
        <Button  component={RouterLink} to={`/SecondPage/MatchingPage`} variant="outlined" size="small" color="primary">
          Zu den Matches
        </Button>

      </CardActions>
      </Card>

    }
    return (
      <div class="columns">
        <div class="column is-one-third">
          <ChatSideBar getChatWindow={updateChatWindow}></ChatSideBar>{' '}
        </div>

        <section className="hero  column">
          <div className="column scrollable">
            <div className="hero-body ">
              {informationForChats}
              <Messages  name={this.state.name} chat={this.state.chatAdvanced} />
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
      console.log(session_id);
      var chat = new ChatBO();
      chat.setLearnGroupId(learnGroupId);
      chat.setIsAccepted(true);
      chat.setSender(name);
      chat.setMessage(e.target.elements.userInput.value);
      // console.log(api)
      let response = await api.addChat(chat);
      let fetchedChatAdvanced = await api.getChatsByLearnGroupId(learnGroupId);
      chatAdvanced(fetchedChatAdvanced);
      console.log(chatAdvanced);
      console.log(fetchedChatAdvanced);

      //saveMsg(e.target.elements.userInput.value);
      e.target.reset();
    }}
  >
    <div className="field has-addons">
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
  <div style={{ heigth: '100%', width: '100%' }}>
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

export default ChatBox;
