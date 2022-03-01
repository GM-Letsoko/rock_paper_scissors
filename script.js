const computerPlay = () => { 
	const random = Math.floor(Math.random() * 3) + 1;
	if(random === 1) return 'rock';
	else if(random === 2) return 'paper';
	else return 'scissors';
}

console.log(computerPlay());