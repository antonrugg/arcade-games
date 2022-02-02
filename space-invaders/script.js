const grid = document.querySelector('#grid');
const size = 15;
const rxc = size * size;
const cells = [];

const aliens = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

for (let i = 0; i < rxc; i++) {
    const cell = document.createElement('div');
    // cell.innerText = i;
    cells.push(cell); 
    grid.appendChild(cell);
    
}

function drawAliens() {
    for (let i = 0; i < aliens.length; i++) {
        cells[aliens[i]].classList.add('alien'); 
    }
}

function removeAliens() {
    for (let i = 0; i < aliens.length; i++) {
        cells[aliens[i]].classList.remove('alien');
    }
}

function moveAliens() {
    removeAliens();
    for (let i = 0; i < aliens.length; i++){
        aliens[i] = aliens[i] + 1;
    }

    drawAliens();
    
}

moveAliens();