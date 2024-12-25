
import MyArray from './MyArray';
const myArr = new MyArray(10);
myArr.add(0);
myArr.add(1);
myArr.add(2);
myArr.add(3);
myArr.add(4);
myArr.add(5);
myArr.add(6);
myArr.add(7);
myArr.add(8);
myArr.add(9);
console.log('myArr0: ', myArr);
myArr.addAtIndex(3,20);
console.log('myArr1: ', myArr);
myArr.removeAtIndex(2);
console.log('myArr2: ', myArr);
myArr.removeAtIndex(2);
myArr.removeAtIndex(2);
myArr.removeAtIndex(2);
console.log('myArr3: ', myArr);
it('取值', () => {
    console.log('myArr4: ', myArr);
    expect(myArr.getByIndex(1)).toBe(20);
});
