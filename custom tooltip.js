const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.background = 'black';
tooltip.style.color = 'white';
tooltip.style.padding = '5px';
tooltip.style.display = 'none';
document.body.appendChild(tooltip);

document.addEventListener('mousemove', (e) => {
    const target = e.target;
    if (target.dataset.tooltip) {
        tooltip.textContent = target.dataset.tooltip;
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
        tooltip.style.display = 'block';
    } else {
        tooltip.style.display = 'none';
    }
});
