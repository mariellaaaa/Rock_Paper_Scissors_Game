const valuesOfGame = ["rock","paper","scissors"];
const computerPlayer = Math.floor(Math.random()*valuesOfGame.length);
const computerChoice = valuesOfGame[computerPlayer];
console.log(computerChoice);
 const myChoice = prompt("please enter a value");
 console.log(myChoice);

const myFunction = ()=>{
    if(computerChoice==="scissors" && myChoice === "paper"){
        alert(`computer choose ${computerChoice} you choose ${myChoice}, Computer Wins!`)
    }
    else if(computerChoice==="Paper" && myChoice === "rock"){
        alert(`computer choose ${computerChoice} you choose ${myChoice}, Computer Wins!`)
    }
    else if(computerChoice==="rock" && myChoice === "scissors"){
        alert(`computer choose ${computerChoice} you choose ${myChoice}, Computer Wins!`)
    }
    else{
        alert(`computer choose ${computerChoice} you choose ${myChoice}, You Win!`)
    }
}
myFunction();