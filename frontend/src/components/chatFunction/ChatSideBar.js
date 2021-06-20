import React, { Component } from "react";
import ChatGroups from "./ChatGroups"
import 'bulma/css/bulma.min.css';
import './ChatSideBar.css'

class ChatSideBar extends Component {
    render(){
       return (
        <aside class="menu 	 ">
        <p class="menu-label ">
          Laufende Chats
        </p>
        <ul class="menu-list">
        <ChatGroups></ChatGroups>
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
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
       );
       }
    }

    export default (ChatSideBar);
