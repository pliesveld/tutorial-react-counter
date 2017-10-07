import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import ItemList from './ItemList';

class App extends Component{
  render() {
    return (
       <div id='root'>
        <ItemList items={this.props.items}/>
       </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default App

