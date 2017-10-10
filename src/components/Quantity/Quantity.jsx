import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quantity.css';

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  render() {
    return (
      <div className="quantity-selector">
        <div className="quantity-selector__label">
          <span>quantity:</span>
        </div>
        <div className="quantity-selector__controls">
          <button
            className="decrement"
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <span className="amount">{this.state.quantity}</span>
          <button className="increment">
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

Quantity.propTypes = {
  price: PropTypes.string,
  qualifier: PropTypes.string,
};

Quantity.defaultProps = {
  price: '',
  qualifier: '',
};

export default Quantity;
