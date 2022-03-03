'use strict';

const game = () => {
	let playerCount = 0;
	let computerCount = 0;
	const div = document.querySelector('div');

	//computerPlay() returns a random computer selection;
	const computerPlay = () => {
		const random = Math.floor(Math.random() * 3) + 1;
		if(random === 1) return 'rock';
		else if(random === 2) return 'paper';
		else return 'scissors';
	}	

	const playRound = (playerSelection, computerSelection) => {
		//if desired change the if statement to a switch statement to make the programme more readable.
		if(playerSelection === 'rock' && computerSelection === 'paper') { 
			computerCount++;
			return `Computer takes this round. Paper beats Rock.`;
		} else if(playerSelection === 'paper' && computerSelection === 'rock') { 
			playerCount++;
			return `You take this round. Paper beats Rock.`;
		} else if(playerSelection === 'scissors' && computerSelection === 'paper') { 
			playerCount++;	
			return `You take this round. Scissors beats Paper.`;
		} else if(playerSelection === 'paper' && computerSelection === 'scissors') { 
			computerCount++
			return `Computer takes this round. Scissors beats Paper.`;
		} else if(playerSelection === 'rock' && computerSelection === 'scissors') { 
			playerCount++;
			return `You take this round. Rock beats Scissors.`;
		} else if(playerSelection === 'scissors' && computerSelection === 'rock') { 
			computerCount++
			return `Computer takes this round. Rock beats Scissors.`;
		} else return `Draw. Nobody takes this round.`;
	}
		 
	const buttons = document.querySelectorAll('button');
	const computerSelection = computerPlay();

	for(let i = 0; i < 5; i++) {
		const playerSelection = buttons.forEach((button) => { 
			button.addEventListener('click', (e) => {
				div.textContent = playRound(e.target.id, computerPlay()) + ` Current Score is Player: ${playerCount}, Computer: ${computerCount}`;
			});
		});
	//}
		if(playerCount === 0 && computerCount === 0) return div.textContent = '';
		else if(i === 4 && playerCount > computerCount) return div.textContent = 'You Win! By ' + playerCount + ' games to ' + computerCount + '.';
		else if(i === 4 && playerCount < computerCount) return div.textContent = 'You Lose! By ' + computerCount + ' games to ' + playerCount + '.'; 
		else if(i === 4 && playerCount === computerCount) return div.textContent = 'It\'s a draw! Nobody wins the game';
	}
}

game();