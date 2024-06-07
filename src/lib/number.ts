export const toPercent = (value: number, total: number, withoutUnit?: boolean) => {
  const result = Number((value / total) * 100);
  if (withoutUnit) return result.toFixed(2);
  return result.toFixed(2) + '%';
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

export const toCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
