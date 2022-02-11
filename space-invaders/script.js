const grid = document.querySelector('#grid');
const size = 15;
const rxc = size * size;
const cells = [];

const aliens = [
    0, 1, 2, 3, 4, 5
    
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

let step = 1;
let direction = 'forward';
function moveAliens() {
    const leftEdge = aliens[0] % size === 0;
    const rightEdge = aliens[aliens.length - 1] % size === size - 1;
    removeAliens();

    if (direction === 'forward' && rightEdge) {
        for (let i = 0; i < aliens.length; i++){
            aliens[i] = aliens[i] + size;
            step = -1;
            direction = 'backward';
        }
        
    }

    if (direction === 'backward' && leftEdge) {
        for (let i = 0; i < aliens.length; i++) {
            aliens[i] = aliens[i] + size;
            step = 1;
            direction = 'forward';
        }

    }

    for (let i = 0; i < aliens.length; i++){
        aliens[i] = aliens[i] + step;
    }

    drawAliens();
    
}

setInterval(moveAliens, 500);

let spaceshipIdx = 217;
cells[spaceshipIdx].classList.add('spaceship');


function moveSpaceship(event) {
    if (event.code !== 'Space') return;

    console.log('move', event);
}

document.addEventListener('keydown', moveSpaceship)


moveAliens();