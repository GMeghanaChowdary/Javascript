function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
const debouncedFn = debounce(() => console.log('Debounced!'), 500);
window.addEventListener('scroll', debouncedFn);
