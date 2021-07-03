import './settings.css'; // Tell webpack that Button.js uses these styles
import CreateProfile from './CreateProfile';
import CreateLearnProfile  from './CreateLearnProfile'
import React, { Component } from "react";


class ContainerRow extends React.Component {
    render(){
       return (
           <div className='rowC'>
               <CreateProfile />
               <CreateLearnProfile />
           </div>
       );
       }
    }

    export default (ContainerRow);
