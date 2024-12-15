function sortByFrequency(arr) {
    const freq = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return arr.sort((a, b) => freq[b] - freq[a] || a - b);
}
console.log(sortByFrequency([4, 5, 6, 5, 4, 3, 6, 4]));
