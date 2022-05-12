const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
//const reset = document.createElement('h1')
const gameGrid = document.getElementById('game')

//h1.classList.add("resetbtn")

//console.log(reset) 

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, /*reset*/)



const choices = ['rock', 'paper', 'scissors'/*, 'reset'*/]
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
  checkWinner()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  //const button2 = document.createElement('buttonTwo')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.textContent = choices[i]
  //button.innerHTML =
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}

let userScore = 0
let cpuScore = 0
function checkWinner() {

  if (userScore >=2){
    console.log("user won")
  } else if (cpuScore >=2){
    console.log('cpu won')
  } 
}

function alertMe() {
  //checkWinner()
  alert('You won the Round')


}

 


//let refreshbtn = userScore && cpuScore===0;
//console.log(refreshbtn)
let refresh = document.createElement('button')
//refresh.id = refresh
refresh.textContent = 'Refresh'
refresh.addEventListener('click', function(){
userScore = 0
cpuScore = 0 


})
gameGrid.append(refresh)











//const resetbtn = document.createElement('button')


//resetbtn.addEventListener('click', alertMe)
//gameGrid.appendChild(reset)


//roundWinner = WihandleClick.addEventListener('click', checkWinner)
//console.log(checkWinner)

/*const bloop = document.querySelector('userScore')
//let button2 = userChoice && cpuScore==0
button2 = function reset() {
  if (userScore >=2 || cpuScore >=2){

    button2.textContent = "Reset Game"
    button2.addEventListener('click', )
    gameGrid
  }
}*/




const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = "YOU WIN!"
      userScore++ 
      checkWinner()
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = "YOU LOSE!"
      cpuScore++
      checkWinner()
      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    resultDisplay.innerHTML = "ITS A DRAW!"
    break

  }
}

/*

Pseudo code 
const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}
let computerWins = 0
let userWins = 0
while(compuerWins!==2 || userWins!==2)
{
    const getResult = () => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = "YOU WIN!"
        computerWin++
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = "YOU LOSE!"
        userWins++
        break
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
      resultDisplay.innerHTML = "ITS A DRAW!"
      break
    }
  }
  }
if computerWins===2 {
    
    alert('you lose')
}
if userWins===2 {
    alert('you win')
}
*/