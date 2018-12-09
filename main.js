const computerChoice = ['r', 'p', 's'];
const game = document.querySelector('main');
let wins = 0,
    losses = 0,
    ties = 0;

document.onkeyup = function(event) {
    const userGuess = event.key;

    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if(userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
        const userWin =
            (userGuess === 'r' && computerGuess === 's') ||
            (userGuess === 's' && computerGuess === 'p') ||
            (userGuess === 'p' && computerGuess === 'r');
        if (userWin) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }
        game.innerHTML = `
        <p>You Choose: ${userGuess}</p>
        <p>The Computer Chose: ${computerGuess}</p>
        <p>wins: ${wins}</p>
        <p>losses: ${losses}</p>
        <p>ties: ${ties}</p>
        `
    } else {
        alert('The key was not accepted')
    }
}