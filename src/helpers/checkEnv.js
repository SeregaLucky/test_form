const isProduction = process.env.NODE_ENV === 'production';

export const currentRedirectUrl = isProduction
  ? process.env.REACT_APP_BASE_PRODUCT_URL
  : process.env.REACT_APP_BASE_LOCAL_URL;
