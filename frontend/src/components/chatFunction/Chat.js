import React, {Component} from "react"
import 'bulma/css/bulma.min.css';
import ChatSideBar from "./ChatSideBar";
import './ChatSideBar.css'
import AppApi from "../../api/AppApi";
import ChatBO from "../../api/ChatBO";

class ChatBox extends Component {
  
  

  
  async componentDidMount() {
    let uid = ""
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"uid"}=`);
    if (parts.length === 2) uid = parts.pop().split(';').shift();
    let app = new AppApi()
    let session_id = await app.getPersonByGoogleId(uid)
    session_id = session_id[0].id
    console.log(session_id)
    var learnProfile = await app.getLearnProfileViaUrl(session_id)
    let profile = await app.getProfileViaUrl(session_id)
    learnProfile = learnProfile[0]
    profile = profile[0]
    console.log(learnProfile)
    let fetchedChatAdvanced =  await app.getChatsByLearnGroupId(1)
    this.setState({ chatAdvanced: fetchedChatAdvanced });
    this.setState({personId : session_id})
    this.setState({name: profile.name})
  }

    
  state = {
    learnGroupId: 0,
    chat: ['hello', 'hi!', 'do you want to chat?'],
    chatAdvanced: 
    [
        {"txtMessage": "Hello", "userMessage": true, "senderID": "Baybora Gülec"},
        {"txtMessage": "Hi Wie gehts", "userMessage": false, "senderID": "Saeid"},
        {"txtMessage": "Oha oha", "userMessage": false, "senderID": "Mertcan"},
        {"txtMessage": "Ganz gut euch", "userMessage": true, "senderID": "Baybora Gülec"},
        {"txtMessage": "Easy auch", "userMessage": false, "senderID": "Mertcan"},
    ]

  }

  


  render() {

    const doSomething = (inputArray) => {

      this.setState({ chatAdvanced: inputArray });

      // Do something with your array of strings in here
    };
    const updateChatWindow = (chatAdvanced, learnGroupId) =>
    {
      this.setState ({chatAdvanced : chatAdvanced, learnGroupId: learnGroupId})
      console.log(this.state)
    }
    return (
        <div class="columns" >
                  <div class="column is-one-quarter">
<ChatSideBar getChatWindow={updateChatWindow} ></ChatSideBar>  </div>
        
      <section className="hero  column" >

<div className="column scrollable">
        <div className="hero-body ">
          <Messages  name = {this.state.name} chat={this.state.chatAdvanced}  />
        </div>

        <div className="hero-foot">

        </div>
        </div>
        <footer className="section is-small">
            <Chat name = {this.state.name} chatAdvanced={doSomething} learnGroupId={this.state.learnGroupId} />
          </footer>
      </section>

      </div>
    )


  }
}

const Chat =  ({chatAdvanced, learnGroupId, name}) => (
    


  

  <form onSubmit={ async (e)  => {

    e.preventDefault();
    const value = `; ${document.cookie}`;
    let parts = value.split(`; ${"uid"}=`);
    let uid = ""
    if (parts.length === 2) { uid =  parts.pop().split(';').shift()}
    var api = AppApi.getApi();
    let session_id = await AppApi.getApi().getPersonByGoogleId(uid)
    session_id = session_id[0].id
   // let learngroup_id = await AppApi.getApi().learngr(session_id)
    parts = value.splt
    console.log(session_id)
      var chat = new ChatBO()
      chat.setLearnGroupId(learnGroupId)
      chat.setIsAccepted(true)
      chat.setSender(name)
      chat.setMessage(e.target.elements.userInput.value)
      // console.log(api)
    let response = await api.addChat(chat)
    let fetchedChatAdvanced =  await api.getChatsByLearnGroupId(learnGroupId)
    chatAdvanced(fetchedChatAdvanced)
    console.log(chatAdvanced)
    console.log(fetchedChatAdvanced)

    //saveMsg(e.target.elements.userInput.value);
    e.target.reset();
  }}>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" name="userInput" type="text" placeholder="Type your message" />
      </div>
      <div className="control">
        <button className="button is-info">
          Send
        </button>
      </div>
    </div>
  </form>
);

const Messages = ({ chat, name }) => (

 

  <div style={{ heigth: '100%', width: '100%' }}>
    {chat.map((m, i) => {
      var msgClass = false
      if(m.sender == name)
      {
        msgClass = false
      }
      else{
        msgClass = true
      }
       // for demo purposes, format every other msg
      return (
          <div >
                     <p style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
        </p>
                     <p style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
                     <span key={i}  className={` is-size-7	 `}>{m.sender}</span>

                         <div>          <span key={i} className={`tag is-medium ${msgClass ? 'is-success' : 'is-info'}`}>{m.message}</span>
</div>
        </p>
 
        </div>
      )}
    )}
  </div>
);

export default (ChatBox);