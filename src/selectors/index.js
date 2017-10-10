export const getProduct = state => state.CatalogEntryView[0];
export const getPrimaryImage = state => getProduct(state).Images[0].PrimaryImage[0];
export const getAlternateImages = state => getProduct(state).Images[0].AlternateImages;
