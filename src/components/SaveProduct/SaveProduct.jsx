import React from 'react';
import './SaveProduct.css';
import Button from '../Button';

const SaveProduct = () => (
  <div className="save-product">
    <div className="button-container">
      <Button flat>ADD TO REGISTRY</Button>
    </div>
    <div className="button-container">
      <Button flat>ADD TO LIST</Button>
    </div>
    <div className="button-container">
      <Button flat>SHARE</Button>
    </div>
  </div>
);

export default SaveProduct;
