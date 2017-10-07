import React, {Component} from 'react';
import styles from './App.css';

class App extends Component{
  constructor(props) {
    super(props);

    var that = this;

    this.state = {
      value: 0,
      increase: () => { this.setState({value: this.state.value + 1}) },
      decrease: () => { this.setState({value: this.state.value - 1}) }
    };
  }

  render() {
    return (
       <div id='display'>
          <button onClick={() => this.state.increase()}>+1</button>
          <span>{this.state.value}</span>
          <button onClick={() => this.state.decrease()}>-1</button>
       </div>
    );
  }
}

export default App
