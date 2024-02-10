let canvasSize = 11;

let selEmoji = '⬛';
let finalText = 'empty';

const canvasSizeInput = document.getElementById("canvasSizeInput");
canvasSizeInput.addEventListener('change', setCanvasSize);
canvasSizeInput.value = canvasSize;

refreshCanvas();
refreshInputArea();

function refreshCanvas() {
    // Create a 10x10 grid
    const gridContainer = document.getElementById('gridContainer');

    // grid-template-columns: repeat(11, 30px);
    gridContainer.style.gridTemplateColumns = "repeat(" + canvasSize + ", 30px)";

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
            const label = document.createElement('label');
            label.innerText = '⬜';
            label.id = 'label-' + (i * canvasSize + j);
            label.className = "emoji-label";
            label.addEventListener('click', () => changeHeartValue(label));
            gridContainer.appendChild(label);
        }
    }
}

function changeHeartValue(label) {
    label.innerHTML = selEmoji;

    refreshInputArea();
}

function setCurrentEmoji(emoji) {
    selEmoji = emoji;
}

function copyToClipboard() {
    navigator.clipboard.writeText(finalText);
}

function refreshInputArea() {
    finalText = ''; // Clear the previous content
    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
            finalText += document.getElementById('label-' + (i * canvasSize + j)).innerText;
        }
        finalText += "\n";
    }
}

function setCanvasSize() {
    canvasSize = this.value;

    refreshCanvas();
    refreshInputArea();
}
