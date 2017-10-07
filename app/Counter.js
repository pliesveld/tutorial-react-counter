import React, {Component} from 'react';
import styles from './Counter.css';

class Counter extends Component{
  constructor(props) {
    super(props);

    let initialValue = this.props.quantity || 0;

    this.state = {
      value: initialValue,
      increase: () => { this.setState({value: this.state.value + 1}) },
      decrease: () => { this.setState({value: this.state.value ? this.state.value - 1 : 0}) }
    };
  }

  render() {
    return (
       <div id='display'>
          <button onClick={() => this.state.decrease()}>-1</button>
          <span>{this.state.value}</span>
          <button onClick={() => this.state.increase()}>+1</button>
       </div>
    );
  }
}

export default Counter
