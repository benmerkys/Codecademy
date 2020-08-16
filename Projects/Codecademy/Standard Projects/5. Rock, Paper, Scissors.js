const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' ||
        userInput === 'paper'||
        userInput === 'scissors' ||
        userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
};
    
const getComputerChoice = () => {
    const computer = Math.floor(Math.random() * 3);

    switch (computer){
        case 0 :
        return 'rock';
        break;
        case 1 :
        return 'paper';
        break;
        case 2 :
        return 'scissors';
        break;
    }
};
    
const determineWinner = ( userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!"
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper') {
            return 'Computer won.';
        } else {
        return 'You won.';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won.';
        } else {
            return 'You won.';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
            return 'Computer won.';
        } else {
            return 'You won.';
        }
    } else if (userChoice === 'bomb'){
        return 'You won.';
    }
};
    
    
const playGame = () =>{
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    
    console.log(`You picked ${userChoice} and computer picked ${computerChoice}.`);
    
    console.log(determineWinner(userChoice,computerChoice));
    
}
    
playGame();