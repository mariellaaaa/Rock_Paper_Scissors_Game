document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = JSON.parse(localStorage.getItem('userBackgrounds'));

    if (backgrounds && backgrounds.length > 0) {
        const lastBackground = backgrounds[backgrounds.length - 1];
        document.body.style.backgroundImage = lastBackground;
    }
})

const rockPaperScissors = () => {
    const startButton = document.querySelector('#start-game-button')
    const restartButton = document.querySelector('#restart-game-button')
    const rockButton = document.querySelector('#rock-button')
    const paperButton = document.querySelector('#paper-button')
    const scissorButton = document.querySelector('#scissor-button')
    const notificationScreen = document.querySelector('#notification-screen')
    const scoreLabel = document.querySelector('#score-label')
    let playsMade = document.querySelector('#plays-made-section')

    const turns = 5;
    let currentTurn = 0
    let heroVictories = 0
    let iaVictories = 0
    let mayorityTurns = Math.ceil(turns/2)

    notificationScreen.textContent = `Welcome to Rock Paper Scissors!`
    scoreLabel.textContent = `You will play for ${turns} round or until either you or the AI wins ${mayorityTurns} games, Good Luck!`

    

    const restartGame = () => {
        startButton.disabled = false
        restartButton.disabled = true
        rockButton.disabled = true
        paperButton.disabled = true
        scissorButton.disabled = true
        currentTurn = 0
        heroVictories = 0
        iaVictories = 0
        let allPlaysMade = document.querySelectorAll('#plays-made-section p')
        allPlaysMade.forEach(element => {
            element.remove()
        });
    }

    const computerPlay = () => {
        const plays = ['Rock', 'Paper', 'Scissors'];
        const option = Math.round(Math.random() * 2);
        return plays[option];
    }

    const playRound = (playerSelection, computerSelection) => {
        const playerMove = playerSelection.toLowerCase()
        const computerMove = computerSelection.toLowerCase()
        const heroVictory = 'Hero wins!'
        const aiVictory = 'Evil AI Wins!'
        const tie = `It's a tie!`
        const rockWin = 'Rock beats Scissors!'
        const paperWin = 'Paper beats Rock!'
        const scissorWin = 'Scissors beats Paper!'
        let message = ''
        let gameElement = document.createElement('p')
        switch (true) {
            case (playerMove === 'rock' && computerMove === 'rock'):
                message = `${tie}, Rocks clash!`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 0];
            case (playerMove === 'rock' && computerMove === 'paper'):
                message = `${aiVictory}, ${paperWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 2]
            case (playerMove === 'rock' && computerMove === 'scissors'):
                message = `${heroVictory}, ${rockWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 1];
            case (playerMove === 'paper' && computerMove === 'rock'):
                message = `${heroVictory}, ${paperWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 1];
            case (playerMove === 'paper' && computerMove === 'paper'):
                message = `${tie}, Papers clash!`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 0];
            case (playerMove === 'paper' && computerMove === 'scissors'):
                message = `${aiVictory}, ${scissorWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 2];
            case (playerMove === 'scissors' && computerMove === 'rock'):
                message = `${aiVictory}, ${rockWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 2];
            case (playerMove === 'scissors' && computerMove === 'paper'):
                message = `${heroVictory}, ${scissorWin}`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 1];
            case (playerMove === 'scissors' && computerMove === 'scissors'):
                message = `${tie}, Scissors clash!`
                gameElement.textContent = message
                playsMade.appendChild(gameElement)
                return [message, 0];
        }
    }

    const game = (playerMove) => {
        let roundResult = playRound(playerMove, computerPlay())
        let displayMessage = roundResult[0]
        let roundWiner = roundResult[1]
        switch (roundWiner) {
            case 1:
                heroVictories++;
                break;
            case 2:
                iaVictories++;
                break;
        }
        notificationScreen.textContent = displayMessage
        if (roundWiner !== 0) {
            currentTurn++;
            scoreLabel.textContent = `Player: ${heroVictories} vs IA: ${iaVictories}  Current round: ${currentTurn + 1}!`
        }
        if (currentTurn === turns || heroVictories == mayorityTurns || iaVictories == mayorityTurns) {
            if (heroVictories > iaVictories) {
                notificationScreen.textContent = `GAME OVER! YOU WIN! WE ARE SAVED!`
            } else if (heroVictories < iaVictories) {
                notificationScreen.textContent = `GAME OVER! THE EVIL IA WON! WE ARE DOOMED!`
            } else {
                notificationScreen.textContent = `GAME OVER! NO ONE WON! IT's A TIE!`
            }
            scoreLabel.textContent = `Player: ${heroVictories} vs IA: ${iaVictories} Final Score!`
            restartGame()
        } 
    }

    const startGame = () => {
        notificationScreen.textContent = `The game has begun!`
        scoreLabel.textContent = `Player: ${heroVictories} vs IA: ${iaVictories}  Current round: ${currentTurn + 1}!`
        startButton.disabled = true
        restartButton.disabled = false
        rockButton.disabled = false
        paperButton.disabled = false
        scissorButton.disabled = false
    }

    startButton.addEventListener('click', (e) => {
        startGame()
    })

    restartButton.addEventListener('click', (e) => {
        restartGame()
    })

    rockButton.addEventListener('click', () => {
        game('rock')
    })
    paperButton.addEventListener('click', () => {
        game('paper')
    })
    scissorButton.addEventListener('click', () => {
        game('scissors')
    })
}

rockPaperScissors()



