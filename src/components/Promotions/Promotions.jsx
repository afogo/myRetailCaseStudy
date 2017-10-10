import React from 'react';
import PropTypes from 'prop-types';
import './Promotions.css';

const Promotions = (props) => {
  const {
    promos,
  } = props;

  return (
    <div className="promotions">
      {
        promos.map(promo => (
          <div className="promo" key={promo}>
            <i className="fa fa-tag" aria-hidden="true" />
            <span className="promo__text">{promo}</span>
          </div>
        ))
      }
    </div>
  );
};

Promotions.propTypes = {
  promos: PropTypes.array,
};

Promotions.defaultProps = {
  promos: [],
};

export default Promotions;
