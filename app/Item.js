import React, {Component} from 'react';
import Counter from './Counter';
import styles from './Item.css';

class Item extends Component {

  render() {
    let itemName = this.props.itemName;
    let quantity = this.props.quantity;

    return (
      <section>
        <span>{itemName}</span>
        <Counter quantity={quantity} />
      </section>
    );
  }
}

export default Item

