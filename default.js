const container = document.querySelector("#container");
const blackBrush = document.querySelector("#black");
const rainbowBrush = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser")
const resizeButton = document.querySelector("#resize")
let currentMode = "";
let size = 16;

function createGrid(rows, cols) {
    container.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const divs = document.createElement('div');
            divs.classList.add('grid')
            container.appendChild(divs);
        }
    }
}

createGrid(size, size)

const gridDivs = document.querySelectorAll('.grid')

function setMode(mode) {
    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener('mouseover', () => {
            if (mode === 'black') {
                gridDiv.style.backgroundColor = 'black';
            } else if (mode === 'eraser') {
                gridDiv.style.backgroundColor = 'white';
            } else if (mode === 'rainbow') {
                gridDiv.style.backgroundColor = generateRandomColor();
            }
        });
    });
}

blackBrush.addEventListener("click", () => {
    currentMode = 'black';
    setMode(currentMode);
})

eraser.addEventListener("click", () => {
    currentMode = 'eraser';
    setMode(currentMode);
})

rainbowBrush.addEventListener("click", () => {
    currentMode = 'rainbow';
    setMode(currentMode);
})

resizeButton.addEventListener("click", () => {
    const newSize = parseInt(prompt("Please enter the size of the sketchpad (1-100):"));
    if (newSize > 0 && newSize <= 100) {
        size = newSize;
        createGrid(size, size);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}