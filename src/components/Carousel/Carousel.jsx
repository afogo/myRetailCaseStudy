import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedImage: props.imageList[0].image,
    };
  }

  componentWillReceiveProps() {
    console.warn('foo');
  }

  render() {
    const {
      imageList,
    } = this.props;

    return (
      <div className="carousel">
        <div className="carousel__highlight">
          <img src={this.state.highlightedImage} alt="" />
        </div>
        <div className="spinner">
          <div className="spinner__arrow spinner__arrow--left">
            <span>&lsaquo;</span>
          </div>
          {imageList.map(imageObj => (
            <img
              // alt tags should be defined
              alt=""
              className={`spinner__image ${this.state.highlightedImage === imageObj.image ? 'selected' : ''}`}
              key={imageObj.image}
              src={imageObj.image}
            />
          ))}
          <div className="spinner__arrow spinner__arrow--right">
            <span>&rsaquo;</span>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageList: PropTypes.array,
};

Carousel.defaultProps = {
  images: [],
};

export default Carousel;
