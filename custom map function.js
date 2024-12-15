Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
console.log([1, 2, 3].customMap(x => x * 2));
