import { Component } from 'react';

import './Lists.scss';

import List from './List/List';

class Lists extends Component {
  render() {
    return (
      <div id="lists__wrapper">
        <List title={'To do'} />
        <List title={'Done'} />
      </div>
    );
  }
}

export default Lists;
