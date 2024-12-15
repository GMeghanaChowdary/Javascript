Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};
console.log([1, 2, 3].customReduce((sum, x) => sum + x, 0));
