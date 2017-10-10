import { connect } from 'react-redux';
import Carousel from './Carousel';
import { getPrimaryImage, getAlternateImages } from '../../selectors';

function mapStateToProps(state) {
  const primaryImage = getPrimaryImage(state);
  const alternateImages = getAlternateImages(state);

  const imageList = alternateImages;
  imageList.unshift(primaryImage);

  return {
    imageList,
  };
}

export default connect(mapStateToProps)(Carousel);
