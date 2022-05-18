const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h1')
//const reset = document.createElement('h1')
const gameGrid = document.getElementById('game')
let rockkiss = new Audio("bubbles1.wav");
let sneezewav = new Audio('bubbles2.wav')
let  poawpoaw = new Audio('bubbles3.wav')
let winsound = new Audio('bing.mp3')
let sprinkles = new Audio('sprinkles.wav')


userChoiceDisplay.classList.add("user")
computerChoiceDisplay.classList.add('cpu')
resultDisplay.classList.add('result')

//console.log(reset) 

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, /*reset*/)


// const gameGrid2 = document.('div')
// gameGrid2.classList.add('forBtns')


//needed in js for volume 
 window.addEventListener('load', function(){

    let music = document.getElementById("music1").play();
     music.autoplay = true;
    // music.load();
    // music.play();

 })

  /*let music = document.getElementById("audio");
  audio.volume = 0.2;*/

// let music = document.getElementById("music1");
//   music.autoplay = true;
//   music.load();
//   music.play();





const choices = ['rock', 'paper', 'scissors'/*, 'reset'*/]
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  if (userChoice == choices[0]){
    rockkiss.play()
  } 
  if (userChoice == choices[1]){
    sneezewav.play()
  }  if (userChoice == choices[2]){
    poawpoaw.play()
  } 
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
  //checkWinner()
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
let winner = ''
function checkWinner() {

  if (userScore >=2){
   winner = 'user'
    console.log("user won")
   alertMe(winner)
  } else if (cpuScore >=2){
    //alertMe(winner)
   winner = 'cpu'
   alertMe(winner)
    console.log('cpu won')
  } 
}


function alertMe(winner) {
  //checkWinner()
  //let winner = champ
  //alert(`${winner} wins`)
  setTimeout(
    alert(`${winner} has won 2 out of 3 Please refresh`)
  , 5000)
winsound.play()
}

 


//let refreshbtn = userScore && cpuScore===0;
//console.log(refreshbtn)
let refresh = document.createElement('button')
refresh.classList.add('refreshbtn')
//refresh.id = refresh
refresh.textContent = 'Refresh'
refresh.addEventListener('click', function(){
userScore = 0
cpuScore = 0 
userChoiceDisplay.textContent = ''
computerChoiceDisplay.textContent = ''
resultDisplay.textContent = ''
sprinkles.play()
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
      //rockSound.play()
    case 'rockscissors':
      //rockSound.play()
    case 'paperrock':
      //rockkiss.play()
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


/*
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

