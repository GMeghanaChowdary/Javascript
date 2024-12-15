const draggable = document.getElementById('draggable');
draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});
document.getElementById('drop-zone').addEventListener('dragover', (e) => e.preventDefault());
document.getElementById('drop-zone').addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(id));
});
