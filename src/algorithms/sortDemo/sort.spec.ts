import { bubbleSort, quickSort } from './sort';
describe('排序算法测试', () => {
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = [11, 12, 22, 25, 34, 64, 90];

  test('冒泡排序', () => {
    expect(bubbleSort([...unsortedArray])).toEqual(sortedArray);
  });

  test('快速排序', () => {
    expect(quickSort([...unsortedArray])).toEqual(sortedArray);
  });

  test('空数组排序', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(quickSort([])).toEqual([]);
  });

  test('已排序数组', () => {
    expect(bubbleSort([...sortedArray])).toEqual(sortedArray);
    expect(quickSort([...sortedArray])).toEqual(sortedArray);
  });
});