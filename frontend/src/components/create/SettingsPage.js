import './settings.css'; // Tell webpack that Button.js uses these styles
import UpdateProfile from './UpdateProfile';
import UpdateLearnProfile from './UpdateLearnProfile';
import React, { Component } from 'react';

class ContainerRow extends React.Component {
  render() {
    return (
      <div class="columns ">
        <div class=" column is-half">
          <UpdateProfile />
        </div>
        <div class="column is-half">
          {' '}
          <UpdateLearnProfile />
        </div>
      </div>
    );
  }
}

export default ContainerRow;
