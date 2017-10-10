import React from 'react';
import PropTypes from 'prop-types';
import './PurchaseDetails.css';
import Promotions from '../Promotions';
import Quantity from '../Quantity';

const PurchaseDetails = (props) => {
  const {
    price,
    qualifier,
  } = props;

  return (
    <div className="purchase-details">
      <div className="product-price">
        <span className="product-price__formatted-price">{price}</span>
        <span className="product-price__qualifier">{qualifier}</span>
      </div>
      <Promotions />
      <Quantity />
    </div>
  );
};

PurchaseDetails.propTypes = {
  price: PropTypes.string,
  qualifier: PropTypes.string,
};

PurchaseDetails.defaultProps = {
  price: '',
  qualifier: '',
};

export default PurchaseDetails;
