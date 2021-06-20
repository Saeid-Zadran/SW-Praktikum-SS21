import React, {Component} from "react"
import 'bulma/css/bulma.min.css';
import ChatSideBar from "./ChatSideBar";
import './ChatSideBar.css'
import AppApi from "../../api/AppApi";

class ChatBox extends Component {


  state = {
    chat: ['hello', 'hi!', 'do you want to chat?']
  }

  


  render() {
    return (
        <div class="columns" >
                  <div class="column is-one-quarter">
<ChatSideBar></ChatSideBar>  </div>
        
      <section className="hero  column" >

<div className="column scrollable">
        <div className="hero-body ">
          <Messages chat={this.state.chat} />
        </div>

        <div className="hero-foot">

        </div>
        </div>
        <footer className="section is-small">
            <Chat saveMsg={this.saveMsg} />
          </footer>
      </section>

      </div>
    )


  }
}

const Chat = ({ saveMsg }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    saveMsg(e.target.elements.userInput.value);
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

const Messages = ({ chat }) => (
  <div style={{ heigth: '100%', width: '100%' }}>
    {chat.map((m, i) => {
      const msgClass = i === 0 || i % 2 === 0 // for demo purposes, format every other msg
      return (
        <p style={{ padding: '.25em', textAlign: msgClass ? 'left' : 'right', overflowWrap: 'normal' }}>
          <span key={i} className={`tag is-medium ${msgClass ? 'is-success' : 'is-info'}`}>{m}</span>
        </p>
      )}
    )}
  </div>
);

export default (ChatBox);