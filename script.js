
const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultChoiceDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let computerChoice
let userChoice
let result

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
userChoice=e.target.id
userChoiceDisplay.innerHTML=userChoice
generateComputerChoice();
getResult();
}))

function generateComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3)+1
    
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
   
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
  if(randomNumber === 1){
    computerChoiceDisplay.style.color='red'
  }
  if(randomNumber === 3){
    computerChoiceDisplay.style.color='green'
  }
  if(randomNumber === 2){
    computerChoiceDisplay.style.color='yellow'
  }
}

function getResult() {
    if (computerChoice === userChoice) {
        const newLocal = result = 'its a draw! 😜'
      }
      if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win! 🥳🥳'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost! 😢😢'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win! 🥳🥳'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lost! 😢😢'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win! 🥳🥳'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lost! 😢😢'
      }
      resultChoiceDisplay.innerHTML = result
      resultChoiceDisplay.style.color='blue'
}