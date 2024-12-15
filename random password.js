function generatePassword(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}
console.log(generatePassword(12));
