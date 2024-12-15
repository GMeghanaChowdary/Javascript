function isArmstrong(num) {
    const digits = String(num).split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(+digit, digits.length), 0);
    return sum === num;
}
console.log(isArmstrong(153));
