import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Item from './Item';

class ItemList extends Component{

  render() {
    let itemsList = this.props.items;

    return (
      <tbody>
        {itemsList.map(function(object, i) {
          return <Item itemName={object.itemName} quantity={object.value} />;
        })}
      </tbody>
    )

  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default ItemList

