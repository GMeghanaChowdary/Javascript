function countdown(seconds) {
    let time = seconds;
    const timer = setInterval(() => {
        console.log(time);
        if (time-- <= 0) clearInterval(timer);
    }, 1000);
}
countdown(5);
