import { formatNumber } from './formatUtils';

describe('formatUtils', () => {
  const test_case: { input: number; output: string }[] = [
    { input: 0.01, output: '0.01' },
    { input: 0.1, output: '0.1' },
    { input: 1, output: '1' },
    { input: 10, output: '10' },
    { input: 100, output: '100' },
    { input: 1000, output: '1,000' },
    { input: 10000, output: '10,000' },
    { input: 100000, output: '100,000' },
    { input: 1000000, output: '1,000,000' },
    { input: 10000000, output: '10,000,000' },
    { input: 100000000, output: '100,000,000' },
  ];

  it.each(test_case)('%s', ({ input, output }) => {
    expect(formatNumber(input)).toBe(output);
  });
});
