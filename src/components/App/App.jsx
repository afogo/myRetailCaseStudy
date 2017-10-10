import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Carousel from '../Carousel';
import PurchaseDetails from '../PurchaseDetails';

const App = (props) => {
  const {
    productName,
  } = props;

  return (
    <div className="App">
      <div className="product-title">
        <h1>${productName}</h1>
      </div>
      <Carousel />
      <PurchaseDetails />
    </div>
  );
};

App.displayName = 'myRetail';

App.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default App;
