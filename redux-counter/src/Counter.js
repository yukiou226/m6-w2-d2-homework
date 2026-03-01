import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter-title">Counter</h1>
        <div className="counter-controls">
          <div className="counter-value">{this.props.count}</div>
          <button type="button" className="counter-btn" onClick={this.decrement} aria-label="Decrement">
            -
          </button>
          <button type="button" className="counter-btn" onClick={this.increment} aria-label="Increment">
            +
          </button>
          <button type="button" className="counter-btn counter-btn-reset" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
