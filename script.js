const game = () => {
	let playerCount = 0;
	let computerCount = 0; 

	for(i = 0; i < 5; i++) {
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
				return 'Computer takes this round. Paper beats Rock';
			} else if(playerSelection === 'paper' && computerSelection === 'rock') { 
				playerCount++;
				return 'You take this round. Paper beats Rock';
			} else if(playerSelection === 'scissors' && computerSelection === 'paper') { 
				playerCount++;	
				return 'You take this round. Scissors beats Paper';
			} else if(playerSelection === 'paper' && computerSelection === 'scissors') { 
				computerCount++
				return 'Computer takes this round. Scissors beats Paper';
			} else if(playerSelection === 'rock' && computerSelection === 'scissors') { 
				playerCount++;
				return 'You take this round. Rock beats Scissors';
			} else if(playerSelection === 'scissors' && computerSelection === 'rock') { 
				computerCount++
				return 'Computer takes this round. Rock beats Scissors';
			} else return 'Draw. Nobody takes this round.';
		}
		//At this stage I will not be validating user input so the bug will be that such an incorrect value will cause the programme to return a draw. This can be fixed using regular expressions. 
		const playerSelection = prompt('If you please. Enter rock, paper, or scissors.').toLowerCase();
		const computerSelection = computerPlay();

		console.log(playRound(playerSelection, computerPlay()));
	}

	if(playerCount > computerCount) console.log('You Win! By ' + playerCount + ' games to ' + computerCount + '.');
	else if(playerCount < computerCount) console.log('You Lose! By ' + computerCount + ' games to ' + playerCount + '.');
	else console.log('It\'s a draw! Nobody wins the game');
}

game();