import { connect } from 'react-redux';
import ProductHighlights from './ProductHighlights';
import { getProductHighlights } from '../../selectors';

function mapStateToProps(state) {
  return {
    highlights: getProductHighlights(state),
  };
}

export default connect(mapStateToProps)(ProductHighlights);
