'use strict';
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
// const currentScore = documnet.querySelector('.current-score')
let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];
let playing = true;

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add("Hidden")

const switchPlayer = function(){
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //Switch Player
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
  if(playing){
  //Generate a random dice no
  const dice = Math.floor(Math.random()*6)+1;
  //assign the random generated dice to dice
  diceEl.src=`dice-${dice}.png`;
  //Display the dice
  diceEl.classList.remove("Hidden")
  if(dice!=1){
    currentScore += dice
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  }
  else{
    switchPlayer();
  }
}
})
btnHold.addEventListener('click',function(){
  if(playing){
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
  if(scores[activePlayer] >= 100){
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    diceEl.classList.add('Hidden')
  }
  else{
    switchPlayer();
  }
}
} )
btnNew.addEventListener('click',function(){
  score1El.textContent=0
  score0El.textContent=0
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
  document.querySelector(`.player--${0}`).classList.add("player--active");
  document.querySelector(`.player--${1}`).classList.remove("player--active");
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  playing=true
  scores[0]=0
  scores[1]=0
  currentScore=0
  activePlayer=0
  diceEl.classList.add('Hidden')
})



