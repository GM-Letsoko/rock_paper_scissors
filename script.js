const computerPlay = () => { 
	const random = Math.floor(Math.random() * 3) + 1;
	if(random === 1) return 'rock';
	else if(random === 2) return 'paper';
	else return 'scissors';
}

const playRound = (playerSelection, computerSelection) => { 
	if(playerSelection === 'rock' && computerSelection === 'paper') return 'You Lose! Paper beats Rock';
	else if(playerSelection === 'paper' && computerSelection === 'rock') return 'You Win! Paper beats Rock';
	else if(playerSelection === 'scissors' && computerSelection === 'paper') return 'You Win! Scissors beats Paper';
	else if(playerSelection === 'paper' && computerSelection === 'scissors') return 'You Lose! Scissors beats Paper';
	else if(playerSelection === 'rock' && computerSelection === 'scissors') return 'You Win! Rock beats Scissors';
	else if(playerSelection === 'scissors' && computerSelection === 'rock') return 'You Lose! Rock beats Scissors';
	else return 'Draw. Nobody wins.';
}
//At this stage I will not be validating user input so the bug will be that such an incorrect value will cause the programme to return a draw. This can be fixed using regular expressions.		
const playerSelection = prompt('If you please. Enter rock, paper, or scissors.').toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerPlay()));