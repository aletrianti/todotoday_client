import React, { Component } from 'react';

import '../Lists.scss';

class DoneList extends Component {
  render() {
    return (
      <div id="donelist__container">
        <h2>Done</h2>

        <div className="donelist__item"></div>
      </div>
    );
  }
}

export default DoneList;
