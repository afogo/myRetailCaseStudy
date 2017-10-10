import React, { Component } from 'react';
import './Quantity.css';

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  decrement() {
    if (this.state.quantity > 0) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  }

  increment() {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  }

  render() {
    return (
      <div className="quantity">
        <div className="quantity-selector">
          <div className="quantity-selector__label">
            <span>quantity:</span>
          </div>
          <div className="quantity-selector__controls">
            <button
              className="decrement"
              onClick={() => this.decrement()}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <span className="amount">{this.state.quantity}</span>
            <button
              className="increment"
              onClick={() => this.increment()}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quantity;
