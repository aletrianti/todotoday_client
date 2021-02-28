import { Component } from 'react';

import Item from './Item/Item';

interface ListProps {
  title: string;
}

class List extends Component<ListProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <div id="list__wrapper">
        <h2>{title}</h2>

        {/* Replace with dynamic data + replace condition with something else */}
        {title === 'To do' ? (
          <div id="list__todo">
            <Item text={'Wash the dishes'} isChecked={false} />
            <Item text={'Finish design'} isChecked={false} />
            <Item text={'Book appointment'} isChecked={false} />
          </div>
        ) : (
          <div id="list__done">
            <Item text={'Send an email to the embassy'} isChecked={true} />
          </div>
        )}
      </div>
    );
  }
}

export default List;
