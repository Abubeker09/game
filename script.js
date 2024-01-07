let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = [
        { name: 'rock ✊', emoji: '✊'},
        { name: 'paper ✋', emoji: '✋'},
        { name: 'scissors ✌️', emoji: '✌️'}
    ];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const chosen = choices[randomIndex];
    const computerText = document.getElementById('computer-text');
    computerText.innerHTML = `<span class="moves">${chosen.emoji}</span> Computer chose ${chosen.name}`;
    return chosen.emoji && chosen.name;
}

function playerChoice(player) {
	const computer = computerChoice();
	document.getElementById('computer-text').textContent = `Computer chose ${computer}`;
	
	if (player === computer) {
        alert('TIE')
		document.querySelector('.result').textContent = "It's a tie!";
	} else if (player === 'rock ✊' && computer === 'scissors ✌️' || 
			   player === 'paper ✋' && computer === 'rock ✊' || 
			   player === 'scissors ✌️' && computer === 'paper ✋') {
                alert('YOU WINE :)')
		playerScore++;
		document.getElementById('player-score').textContent = `Player: ${playerScore}`;
		document.querySelector('.result').textContent = "Player wins!";
	} else {
		computerScore++;
        alert('YOU LOSE :(');
		document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
		document.querySelector('.result').textContent = "Computer wins!";
	}
}
