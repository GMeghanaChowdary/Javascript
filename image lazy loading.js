const images = document.querySelectorAll('[data-src]');
function lazyLoad() {
    images.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}
window.addEventListener('scroll', lazyLoad);
