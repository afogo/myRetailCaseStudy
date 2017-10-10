import React from 'react';
import PropTypes from 'prop-types';
import './ProductHighlights.css';

const Promotions = (props) => {
  const {
    highlights,
  } = props;

  return (
    <div className="highlights">
      <h2 className="title">product highlights</h2>
      <ul>
        {
          highlights.map(highlight => (
            <li className="highlight" dangerouslySetInnerHTML={{ __html: highlight }} />
          ))
        }
      </ul>
    </div>
  );
};

Promotions.propTypes = {
  highlights: PropTypes.array,
};

Promotions.defaultProps = {
  highlights: [],
};

export default Promotions;
