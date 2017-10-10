import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedImage: props.imageList[0].image,
      spinnerPosition: 0,
    };
  }

  setHighlightedImage(imagePath) {
    this.setState(() => ({ highlightedImage: imagePath }));
  }

  slideRight() {
    const maxSlide = -(this.props.imageList.length * 74) + 222;

    if (this.state.spinnerPosition > maxSlide) {
      this.setState(prevState => ({ spinnerPosition: prevState.spinnerPosition - 74 }));
    }
  }

  slideLeft() {
    if (this.state.spinnerPosition < 0) {
      this.setState(prevState => ({ spinnerPosition: prevState.spinnerPosition + 74 }));
    }
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
        <div className="carousel__controls">
          <div
            className={`arrow arrow--left ${this.state.spinnerPosition >= 0 ? 'hidden' : ''}`}
            onClick={() => this.slideLeft()}
          >
            <span>&lsaquo;</span>
          </div>
          <div className="spinner">
            <div
              className="spinner__images"
              style={{
                left: `${this.state.spinnerPosition}px`,
              }}
            >
              {imageList.map(imageObj => (
                <img
                  // alt tags should be defined
                  alt=""
                  className={`thumbnail ${this.state.highlightedImage === imageObj.image ? 'selected' : ''}`}
                  key={imageObj.image}
                  onClick={() => this.setHighlightedImage(imageObj.image)}
                  src={imageObj.image}
                />
              ))}
            </div>
          </div>
          <div
            className={`arrow arrow--right ${this.state.spinnerPosition <= -(this.props.imageList.length * 74) + 222 ? 'hidden' : ''}`}
            onClick={() => this.slideRight()}
          >
            <span>&rsaquo;</span>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageList: PropTypes.array.isRequired,
};

export default Carousel;
