function isPalindromicNumber(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}
console.log(isPalindromicNumber(121));
