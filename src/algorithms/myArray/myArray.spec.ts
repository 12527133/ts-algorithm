
import MyArray from './MyArray';
const myArr = new MyArray(10);
myArr.add(1);
myArr.add(2);
myArr.add(3);
myArr.addAtIndex(20,1);
myArr.removeAtIndex(3);
it('取值', () => {
    console.log('myArr1: ', myArr);
    expect(myArr.getByIndex(1)).toBe(20);
});
