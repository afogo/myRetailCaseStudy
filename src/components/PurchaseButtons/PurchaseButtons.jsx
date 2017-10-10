import React from 'react';
import PropTypes from 'prop-types';
import './PurchaseButtons.css';
import Button from '../Button';

const PurchaseButtons = (props) => {
  const {
    purchasingChannelCode,
  } = props;

  return (
    <div className="purchase-buttons">
      {purchasingChannelCode === '0' || purchasingChannelCode === '2' ?
        <div className="button-container">
          <Button>PICK UP IN STORE</Button>
        </div>
        : null
      }
      {purchasingChannelCode === '0' || purchasingChannelCode === '1' ?
        <div className="button-container">
          <Button primary>ADD TO CART</Button>
        </div>
        : null
      }
    </div>
  );
};

PurchaseButtons.propTypes = {
  purchasingChannelCode: PropTypes.string,
};

PurchaseButtons.defaultProps = {
  purchasingChannelCode: '',
};

export default PurchaseButtons;
