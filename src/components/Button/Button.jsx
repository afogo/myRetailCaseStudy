import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    children,
    primary,
  } = props;

  return (
    <button
      className={`purchase-button ${primary ? 'primary' : ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  primary: false,
};

export default Button;
