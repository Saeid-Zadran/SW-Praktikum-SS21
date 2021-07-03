import React, { Component } from 'react';
import ChatGroups from './ChatGroups';
import 'bulma/css/bulma.min.css';
import './ChatSideBar.css';
import AppApi from '../../api/AppApi';
import CreateLearnGroup from '../create/CreateLearnGroup';
import ChatRequest from '../chatFunction/ChatRequest';
import Paper from '@material-ui/core/Paper';

class ChatSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnGroups: [],
      openRequests: [],
    };
  }

  componentDidMount() {
    this.refreshThePage()
  }

  async refreshThePage()
  {
    let uid = getCookie('uid');
    let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
    session_id = session_id[0].id;
    let learngroups = await AppApi.getApi().getLearnGroupByPersonId(session_id);
    console.log(learngroups);
    let groupRequests = await AppApi.getApi().getGroupRequestByAccepted(
      session_id
    );
    let openGroupRequests = await AppApi.getApi().getGroupRequestByPersonId(
      session_id
    );

    console.log(openGroupRequests, session_id);

    // filter alle offenen GruppenRequests nach is_accepted === false
    openGroupRequests = openGroupRequests.filter(
      (openRequest) => openRequest.is_accepted === false
    );
    console.log(openGroupRequests, session_id);

    openGroupRequests = openGroupRequests.filter(
      (openRequest) => openRequest.person_id === session_id
    );
    console.log(openGroupRequests);

    for (var key in groupRequests) {
      let groupRequest = groupRequests[key];
      let learnGroup = await AppApi.getApi().getLearnGroupById(
        groupRequest.learngroup_id
      );
      learngroups.push(learnGroup[0]);
    }
    this.setState({
      learnGroups: learngroups,
      openRequests: openGroupRequests,
    });
  }

  executeScroll = () => this.myRef.scrollIntoView();

  render() {
    const getNewChats = async (learnGroups) => {
      let uid = getCookie('uid');
      let session_id = await AppApi.getApi().getPersonByGoogleId(uid);
      session_id = session_id[0].id;
      let learngroups = await AppApi.getApi().getLearnGroupByPersonId(
        session_id
      );
      this.setState({
        learnGroups: learngroups,
      });
      this.chatGroupBox.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    const pageRefresh = () => {
      this.refreshThePage()
    }

    return (
      <aside class="menu mt-5">
        <p class="menu-label ">
          Laufende Chats ({this.state.learnGroups.length})
        </p>

        <Paper elevation={0} style={{ maxHeight: 200, overflow: 'auto' }}>
          <ul class="menu-list">
            {this.state.learnGroups.map((learngroup) => (
              <ChatGroups
                getChatWindow={this.props.getChatWindow}
                id={learngroup.id}
                title={learngroup.name}
              ></ChatGroups>
            ))}
            <div ref={(ref) => (this.chatGroupBox = ref)} />
          </ul>
        </Paper>
        <p class="menu-label">
          Offene Anfragen ({this.state.openRequests.length}){' '}
        </p>

        <Paper elevation={0} style={{ maxHeight: 200, overflow: 'auto' }}>
          <ul class="menu-list">
            {this.state.openRequests.map((openrequest) => (
              <ChatRequest
                loadFreshPage={pageRefresh}
                learngroup_id={openrequest.learngroup_id}
                person_id={openrequest.person_id}
                id={openrequest.id}
              ></ChatRequest>
            ))}
          </ul>
          <div ref={(ref) => (this.openRequestsBox = ref)} />
        </Paper>
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
