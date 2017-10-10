import { connect } from 'react-redux';
import PurchaseDetails from './PurchaseDetails';
import { getOfferPrice } from '../../selectors';

function mapStateToProps(state) {
  return {
    price: getOfferPrice(state).formattedPriceValue,
    qualifier: getOfferPrice(state).priceQualifier,
  };
}

export default connect(mapStateToProps)(PurchaseDetails);
