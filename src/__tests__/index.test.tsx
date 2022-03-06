import { add } from '../index';

describe('Basic number addition', () => {
  test('should add up positive numbers', async () => {
    const sum = add(0, 1, 2, 3, 4, 5, 6);

    expect(sum).toEqual(21);
  });

  test('should add up negative numbers', async () => {
    const sum = add(0, -1, -2, -3, -4, -5, -6);

    expect(sum).toEqual(-21);
  });
});
