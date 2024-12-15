function generatePermutations(arr) {
    if (arr.length === 0) return [[]];
    return arr.flatMap((el, i) =>
        generatePermutations(arr.slice(0, i).concat(arr.slice(i + 1))).map(permutation => [el, ...permutation])
    );
}
console.log(generatePermutations([1, 2, 3]));
