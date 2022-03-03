const grid = document.querySelector('#grid');
const size = 15;
const rxc = size * size;
const cells = [];

const aliens = [
    0, 1, 2, 3, 4, 5
    
];

const aliensKilled = [];

for (let i = 0; i < rxc; i++) {
    const cell = document.createElement('div');
    // cell.innerText = i;
    cells.push(cell); 
    grid.appendChild(cell);
    
}

function drawAliens() {
    for (let i = 0; i < aliens.length; i++) {
        if (aliensKilled.includes(aliens[i]) ) {
            cells[aliens[i]].classList.add('alien'); 
        }
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
    const leftEdge = spaceshipIdx % size === 0;
    const rightEdge = spaceshipIdx % size === size - 1;


    cells[spaceshipIdx].classList.remove('spaceship');
    if (event.code === 'ArrowLeft' && !leftEdge) {
        // mi muovo a sinistra
        spaceshipIdx--;
    } else if (event.code === 'ArrowRight' && !rightEdge) {
        //mi muovo a destra
        spaceshipIdx++;
    }
    cells[spaceshipIdx].classList.add('spaceship');
}




document.addEventListener('keydown', moveSpaceship);


//shoot
function shoot(event) {
    if (event.code !== 'Space') return;

    let laserIdx = spaceshipIdx;
    let laserIntVal = null;
    function moveLaser() {
        cells[laserIdx].classList.remove('laser');
        laserIdx = laserIdx - size;

        if (laserIdx < 0) {
            clearInterval(laserIntVal);
            return;
        }

        // check for shoot

        if (cells[laserIdx].classList.contains('alien')) {
            //clear del set interval
            clearInterval(laserIntVal);
            cells[laserIdx].classList.remove('alien', 'laser');
            cells[laserIdx].classList.add('boom');
            setTimeout(function () {
                cells[laserIdx].classList.remove('boom');
            }, 200);


            const killed = aliens.indexOf(laserIdx);
            aliensKilled..push(killed);

            return;
        }



        cells[laserIdx].classList.add('laser');
    }

    laserIntVal = setInterval(moveLaser, 200);

    

    console.log('shoot');
}


document.addEventListener('keydown', shoot);


    


    