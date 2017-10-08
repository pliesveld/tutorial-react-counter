import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import ItemList from './ItemList';

class App extends Component{
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  render() {
    return (
       <div id='root'>
        <ItemList items={this.state.items}/>
       </div>
    );
  }

  componentDidMount() {
    fetch('./items.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({items: responseData});
    });
  }

}

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default App

