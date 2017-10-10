import { connect } from 'react-redux';
import Promotions from './Promotions';
import { getPromotions } from '../../selectors';

function mapStateToProps(state) {
  const shortPromos = getPromotions(state).map(promo => promo.Description[0].shortDescription);
  return {
    promos: shortPromos,
  };
}

export default connect(mapStateToProps)(Promotions);
