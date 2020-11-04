const formatPrice = price => {
  if (price === 0) return 'Free';
  return `£ ${(price / 100).toFixed(2)}`;
};

export default formatPrice;
