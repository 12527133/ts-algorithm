
import {oddEven} from './oddeven';


describe('oddeven', () => {
    console.log('[1,2,3,4,5,7]:'+oddEven([1,2,3,4,5,7]));
  test('test1', () => {
    expect(oddEven([1,2,3,4,5,7])).toBe(2);
  });

  test('test2', () => {
    console.log('[1,3,5]:'+oddEven([1,3,5]));
    expect(oddEven([1,3,5])).toBe(2);
  });

  test('test3', () => {
    console.log('[1,3,5,7,9,11,13]:'+oddEven([1,3,5,7,9,11,13]));
    expect(oddEven([1,3,5,7,9,11,13])).toBe(3);
  });

});