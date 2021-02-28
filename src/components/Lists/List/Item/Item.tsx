import { Component } from 'react';

interface ItemProps {
  text: string;
  isChecked: boolean;
}

class Item extends Component<ItemProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { text, isChecked } = this.props;

    return (
      <div className="item__wrapper">
        <div className="item">
          <span>{text}</span>

          {/* Make id more unique */}
          <input
            type="checkbox"
            name="item__checkbox"
            id="item__checkbox"
            defaultChecked={isChecked}
          />
        </div>
      </div>
    );
  }
}

export default Item;
