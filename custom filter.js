Array.prototype.customFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
console.log([1, 2, 3, 4].customFilter(x => x % 2 === 0));
