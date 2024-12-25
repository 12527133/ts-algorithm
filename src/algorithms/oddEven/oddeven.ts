// 奇偶配对,第一个奇，第二个偶以此类推，一奇一偶为一组，看有多少组
export const oddEven = (arr: number[]):number => {
    const oddCount: number = arr.filter((item) => item % 2 !== 0).length; // 奇数个数
    const evenCount: number = arr.length - oddCount; // 偶数个数
    if (oddCount <= evenCount+1) {
        return oddCount;
    } 
    // 奇数个数大于偶数个数  3,5,7,9,  11,13     4,6,8,10
    const count = (oddCount - evenCount)%2=== 0 ? 0 : 1;
    const extraOdd = Math.floor((oddCount - evenCount)/3);
    return evenCount + extraOdd + count;
}