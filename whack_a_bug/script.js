//Inseriamo il punteggio iniziale
const scoreDisplay = document.querySelector('#score-display');
let score = 0;
scoreDisplay.innerText = score;

//Inseriamo il tempo iniziale
const timerDisplay = document.querySelector('#timer-display');
let timeLeft = 30;
timerDisplay.innerText = timeLeft;

//inseriamo il bug in una cella via javascript
const cells = document.querySelectorAll('.cell');

//diamo un valore di velocita iniziale
let bugSpeed = 800;


// logica per randomizzare il bug in una cella
function randomBug() {
    //pulisce le celle dal bug prima di randomizzarne un'altra
    removeBug();

    //aumentiamo la difficolta se il giocatore e' bravo
    if (score === 10) {
        bugSpeed = bugSpeed / 2;
    }

    //randomizzo una cella a caso
    const randomNumber = Math.floor(Math.random() * cells.length)
    const cell = cells[randomNumber];
    cell.classList.add('bug');
}

const bugMovement = setInterval(randomBug, bugSpeed);

function removeBug() {
    for (let i = 0; i < cells.length; i++) {
        const cellToClean = cells[i];
        cellToClean.classList.remove('bug');
    }
}


//Diamo modo di colpire il bug
for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function () {
        if (cell.classList.contains('bug')) {
            score++;
            scoreDisplay.innerText = score;
            cell.classList.remove('bug');
            cell.classList.add('splat');
            //puliamo la cella da splat
            setTimeout(function () {
                cell.classList.remove('splat');
            }, 200);
        }
    })
}

//impostiamo un conto alla rovescia
const timer = setInterval(countDown, 1000)

function countDown() {
    timeLeft--;
    timerDisplay.innerText = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        clearInterval(bugMovement);
        removeBug();
        showAlert(`GAME OVER! Punti: ${score}`);
    }
}




