import React, { Component } from "react";
import ChatGroups from "./ChatGroups"
import 'bulma/css/bulma.min.css';
import './ChatSideBar.css'
import AppApi from '../../api/AppApi'
import CreateLearnGroup from '../create/CreateLearnGroup'

class ChatSideBar extends Component {

  state = {
    learnGroups: ['Lerngruppe12', 'React Lerngruppe', 'Bitches', "ahuren" ],
  }
  async componentDidMount() {
    let uid = getCookie("uid")
    let session_id = await AppApi.getApi().getPersonByGoogleId(uid)
    session_id = session_id[0].id
    console.log(session_id)
    let learngroups = await AppApi.getApi().getLearnGroupByPersonId(session_id)
    this.setState({
        learnGroups: learngroups,
    })
    console.log(this.state.learnGroups)
    console.log(this.props)
  }

 


    render(){

      const getNewChats = async (learnGroups) => {
        let uid = getCookie("uid")
        let session_id = await AppApi.getApi().getPersonByGoogleId(uid)
        session_id = session_id[0].id
        console.log(session_id)
        let learngroups = await AppApi.getApi().getLearnGroupByPersonId(session_id)
        this.setState({
            learnGroups: learngroups,
        })
        console.log(this.state.learnGroups)
      
    }
       return (
        <aside class="menu">
        <p class="menu-label ">
          Laufende Chats
        </p>
        <ul class="menu-list">
          {this.state.learnGroups.map(learngroup => 
            <ChatGroups getChatWindow={this.props.getChatWindow} id={learngroup.id} title={learngroup.name}></ChatGroups>)}
        </ul>
        <p class="menu-label">
          Matches
        </p>
        <ul class="menu-list">
          <li>
            <a class="is-active">React native</a>
            <ul>
              <li><a>Saed</a></li>
              <li><a>Jimmy</a></li>
              <li><a>Mertcan</a></li>
            </ul>
          </li>

        </ul>
        <p class="menu-label">
          Lerngruppen Matches
        </p>
        <ul class="menu-list">

        </ul>

        <CreateLearnGroup getNewChatWindow={getNewChats} ></CreateLearnGroup>
      </aside>
       );
       }
    }
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }

    export default (ChatSideBar);
