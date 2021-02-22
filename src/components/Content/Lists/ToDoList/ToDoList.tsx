import React, { Component } from 'react';

import '../Lists.scss';

class ToDoList extends Component {
  render() {
    return (
      <div id="todolist__container">
        <h2>To do</h2>

        <div className="todolist__item"></div>
      </div>
    );
  }
}

export default ToDoList;
