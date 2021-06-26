import React, { Component } from 'react';
import ChatGroups from './ChatGroups';
import 'bulma/css/bulma.min.css';
import './ChatSideBar.css';
import AppApi from '../../api/AppApi';
import CreateLearnGroup from '../create/CreateLearnGroup';
import ChatRequest from '../chatFunction/ChatRequest';

class ChatSideBar extends Component {
  state = {
    learnGroups: [],
  };
  async componentDidMount() {
    let uid = getCookie('uid');
    let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    let learngroups = await AppApi.getApi().getLearnGroupByPersonId(session_id);
    this.setState({
      learnGroups: learngroups,
    });
  }

  render() {
    const getNewChats = async (learnGroups) => {
      let uid = getCookie('uid');
      let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
      session_id = session_id[0].id;
      console.log(session_id);
      let learngroups = await AppApi.getApi().getLearnGroupByPersonId(
        session_id
      );
      this.setState({
        learnGroups: learngroups,
      });
    };
    return (
      <aside class="menu mt-5">
        <p class="menu-label ">Laufende Chats</p>
        <ul class="menu-list">
          {this.state.learnGroups.map((learngroup) => (
            <ChatGroups
              getChatWindow={this.props.getChatWindow}
              id={learngroup.id}
              title={learngroup.name}
            ></ChatGroups>
          ))}
        </ul>
        <p class="menu-label">Offene Anfragen</p>
        <ul class="menu-list">
          <ChatRequest title="Das ist eine Lernruppe"></ChatRequest>
          <ChatRequest title="Ich bin eine kleine Lernnutte"></ChatRequest>
          <ChatRequest></ChatRequest>
        </ul>
        <p class="menu-label">Neue Lerngruppe </p>

        <CreateLearnGroup getNewChatWindow={getNewChats}></CreateLearnGroup>
      </aside>
    );
  }
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default ChatSideBar;
