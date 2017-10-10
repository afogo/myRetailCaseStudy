import { connect } from 'react-redux';
import App from './App';
import { getProduct, getPrimaryImage, getAlternateImages } from '../../selectors';

function mapStateToProps(state) {
  const props = {
    productName: getProduct(state).title,
    primaryImage: getPrimaryImage(state),
    alternateImages: getAlternateImages(state),
  };

  return props;
}

export default connect(mapStateToProps)(App);
