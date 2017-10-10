import { connect } from 'react-redux';
import PurchaseButtons from './PurchaseButtons';
import { getPurchasingChannelCode } from '../../selectors';


function mapStateToProps(state) {
  return {
    purchasingChannelCode: getPurchasingChannelCode(state),
  };
}

export default connect(mapStateToProps)(PurchaseButtons);
