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
    switch (true) {
        case (playerMove === 'rock' && computerMove === 'rock'):
            return `${tie}, Rocks clash!`;
        case (playerMove === 'rock' && computerMove === 'paper'):
            return `${aiVictory}, ${paperWin}`
        case (playerMove === 'rock' && computerMove === 'scissors'):
            return `${heroVictory}, ${rockWin}`;
        case (playerMove === 'paper' && computerMove === 'rock'):
            return `${heroVictory}, ${paperWin}`;
        case (playerMove === 'paper' && computerMove === 'paper'):
            return `${tie}, Papers clash!`;
        case (playerMove === 'paper' && computerMove === 'scissors'):
            return `${aiVictory}, ${scissorWin}`;
        case (playerMove === 'scissors' && computerMove === 'rock'):
            return `${aiVictory}, ${rockWin}`;
        case (playerMove === 'scissors' && computerMove === 'paper'):
            return `${heroVictory}, ${scissorWin}`;
        case (playerMove === 'scissors' && computerMove === 'scissors'):
            return `${tie}, Scissors clash!`;
    }
}

const game = () => {
    const turns = 5;
    let currentTurn = 1
    let heroVictories = 0
    let iaVictories = 0
    alert("Oh no! An evil IA has taken control of your browser!")
    alert("To banish it you must beat it at a game of Rock, Paper, Scissors!")
    alert(`${turns} games will be played to determine the Victor! Or until one has won most rounds!`)
    while (currentTurn < turns || heroVictories < Math.ceil(turns / 2) && iaVictories < Math.ceil(turns / 2)) {
        let invalidMove = true;
        let playerMove = ''
        while (invalidMove) {
            playerMove = prompt(`Round ${currentTurn}, Pick either rock, paper or scissors!`)
            let cleanedInput = playerMove.toLowerCase().trim().replace(/\s+/g, '')
            if (cleanedInput == 'rock' || cleanedInput == 'paper' || cleanedInput == 'scissors') {
                invalidMove = false;
                playerMove = cleanedInput;
            } else {
                alert("OH NO! That is not a valid move!")
            }
        }
        let roundResult = playRound(playerMove, computerPlay())
        if (roundResult.includes('Hero')) {
            heroVictories++
        } else if (roundResult.includes('Evil')) {
            iaVictories++
        }
        alert(roundResult)
        alert(`Evil AI: ${iaVictories}, Hero: ${heroVictories}`)
        currentTurn++;
    }

    if (heroVictories > iaVictories) {
        alert(`GAME OVER! YOU WIN! WE ARE SAVED!`)
        return 'HERO'
    } else if (heroVictories < iaVictories) {
        alert(`GAME OVER! THE EVIL IA WON! WE ARE DOOMED!`)
        return 'AI'
    } else {
        alert(`GAME OVER! NO ONE WON! IT's A TIE!`)
        return 'TIE'
    }
}

const startGame = () => {
    let continuePlaying = true;
    while (continuePlaying) {
        let result = game()
        let message = ''
        switch (result) {
            case "HERO":
                message = 'The AI wants revenge, will you face it again?'
                break;
            case "AI":
                message = 'Not all hope is lost, will you try again?'
                break;
            case "TIE":
                message = 'Will you leave the AI alone or will you try again?'
                break;
        }
        let invalidAnswer = true
        let continueInput = ''
        while (invalidAnswer) {
            continueInput = prompt(`${message} Yes/No`)
            let cleanedInput = continueInput.toLowerCase().trim().replace(/\s+/g, '')
            if (cleanedInput == 'yes' || cleanedInput == 'y' || cleanedInput == 'no' || cleanedInput == 'n') {
                invalidAnswer = false;
                continueInput = cleanedInput;
            } else {
                alert("OH NO! That is not a valid answer!")
            }
        }
        console.log(continueInput)
        if(continueInput == 'yes' || continueInput == 'y'){
            alert("Here we go again!")
        } else if (continueInput == 'no' || continueInput == 'n'){
            continuePlaying = false
            alert("OK, Come back again soon!")
        }
    }
}

startGame()
