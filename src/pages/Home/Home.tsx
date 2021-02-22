import { Component } from 'react';

import ToDoList from '../../components/Content/Lists/ToDoList/ToDoList';
import DoneList from '../../components/Content/Lists/DoneList/DoneList';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <ToDoList />
        <DoneList />
      </div>
    );
  }
}

export default Home;
