export const formatNumber = (number: number): string => {
  return number.toLocaleString('ko-KR', { style: 'decimal' });
};
