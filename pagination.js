function paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2)); // [3, 4]
