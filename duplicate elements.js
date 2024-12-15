function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    arr.forEach(item => seen.has(item) ? duplicates.add(item) : seen.add(item));
    return [...duplicates];
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5]));
