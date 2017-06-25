import React , {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count : 0,
    };
    this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      count : prevState.count + 1
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Count : {this.state.count}</button>
    );
  }
}
export default Counter;
