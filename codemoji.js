let canvasSize = 10;

let selEmoji = '⬛';
let finalText = 'empty';

const canvasSizeInput = document.getElementById("canvasSizeInput");
canvasSizeInput.addEventListener('change', setCanvasSize);
canvasSizeInput.value = canvasSize;

refreshCanvas('⬜');
refreshInputArea();

function refreshCanvas(clearEmoji) {
    // Create a 10x10 grid
    const gridContainer = document.getElementById('gridContainer');

    // grid-template-columns: repeat(11, 30px);
    gridContainer.style.gridTemplateColumns = "repeat(" + canvasSize + ", 24px)";

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
            const label = document.createElement('h1');
            label.innerText = clearEmoji;
            label.id = 'label-' + i + "," + j;
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
            finalText += document.getElementById('label-' + i + "," + j).innerText;
        }
        finalText += "\n";
    }
}

function setCanvasSize() {
    canvasSize = this.value;
}

// Helper Functions

/**
 * Clears the emoji canvas
 * @param {number} canvasSize The size of the canvas
 */
function clearCanvas(canvasSize) {
    canvasSize = canvasSize;

    refreshCanvas(selEmoji);
    refreshInputArea();
}
/*
    <button class="emoji-btn" onclick="setCurrentEmoji('⬜')">⬜</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('⬛')">⬛</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟥')">🟥</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟧')">🟧</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟨')">🟨</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟩')">🟩</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟦')">🟦</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟫')">🟫</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🟪')">🟪</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('❤️')">❤️</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🥰')">🥰</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('🎉')">🎉</button>
    <button class="emoji-btn" onclick="setCurrentEmoji('👍')">👍</button>
    */

function selectEmoji(emojiID) {
    switch (emojiID) {
        case "white_square":
            setCurrentEmoji('⬜');
            break;
        case "black_square":
            setCurrentEmoji('⬛');
            break;
        case "red_square":
            setCurrentEmoji('🟥');
            break;
        case "orange_square":
            setCurrentEmoji('🟧');
            break;
        case "yellow_square":
            setCurrentEmoji('🟨');
            break;
        case "green_square":
            setCurrentEmoji('🟩');
            break;
        case "blue_square":
            setCurrentEmoji('🟦');
            break;
        case "brown_square":
            setCurrentEmoji('🟫');
            break;
        case "purple_square":
            setCurrentEmoji('🟪');
            break;
        case "heart":
            setCurrentEmoji('❤️');
            break;
        case "love_face":
            setCurrentEmoji('🥰');
            break;
        case "party_hat":
            setCurrentEmoji('🎉');
            break;
        case "thumbs_up":
            setCurrentEmoji('👍');
            break;
        default:
            setCurrentEmoji();
            break;
    }
}

function drawEmoji(posX, posY) {
    // 'label-' + i + "," + j
    changeHeartValue(document.getElementById('label-' + posY + "," + posX));
}
