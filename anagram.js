function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent"));
