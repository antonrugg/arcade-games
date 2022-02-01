const grid = document.querySelector('#grid');
const size = 15;
const rxc = size * size;
const cells = [];

const aliens = [
    0,1,2,3,,4,5

];

for (let i = 0; i < rxc; i++) {
    const cell = document.createElement('div');
    cell.innerText = i;
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