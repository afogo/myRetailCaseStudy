export const getProduct = state => state.CatalogEntryView[0];
export const getPrimaryImage = state => getProduct(state).Images[0].PrimaryImage[0];
export const getAlternateImages = state => getProduct(state).Images[0].AlternateImages;
export const getOfferPrice = state => getProduct(state).Offers[0].OfferPrice[0];
export const getPromotions = state => getProduct(state).Promotions;
export const getPurchasingChannelCode = state => getProduct(state).purchasingChannelCode;
export const getProductHighlights = state => getProduct(state).ItemDescription[0].features;
