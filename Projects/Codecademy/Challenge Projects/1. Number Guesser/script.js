let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};


const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
};


const alert = () => console.log('Your number is out of range!');


const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    
    if (humanGuess < 0 || humanGuess > 9) {
        alert();
    } else if (computerGuess < 0 || computerGuess > 9) {
        alert(); 
    }

    humanGuess = getAbsoluteDistance (humanGuess, secretNumber); 
    computerGuess = getAbsoluteDistance (computerGuess, secretNumber);

    return humanGuess <= computerGuess;
};


const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}; 

const advanceRound = () => currentRoundNumber ++;