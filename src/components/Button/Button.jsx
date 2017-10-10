import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    children,
    primary,
    flat,
  } = props;

  return (
    <button
      className={`purchase-button ${primary ? 'primary' : ''} ${flat ? 'flat' : ''}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  flat: PropTypes.bool,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  flat: false,
  primary: false,
};

export default Button;
