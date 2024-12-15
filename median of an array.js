function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
}
console.log(findMedian([1, 3, 5, 2, 4]));
