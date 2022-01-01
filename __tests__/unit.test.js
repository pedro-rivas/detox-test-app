import {multiply} from '../src/actions/';

/**
 * Test the multiply method
 */
describe('multiply', () => {
  it('Should multiply by 5', () => {
    const is295 = multiply(59);
    expect(is295).toEqual(295);
  });
});
