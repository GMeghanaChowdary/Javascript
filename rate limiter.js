function rateLimit(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            return fn(...args);
        }
    };
}
const limitedFn = rateLimit(() => console.log('Called!'), 1000);
setInterval(limitedFn, 200);
