const cards = document.querySelectorAll('.memory-card');

let hasFlipCard = false;
let lockBoard = false;
let firstCard;
let secondCard ;
let count=0;
let failedAttempts = 0;
let score = document.getElementById("score");

score.innerHTML = `Score : ${count} <br> Failed Attempts : ${failedAttempts}`

function flipCard()
{

    if(lockBoard)
        return;

    if(this === firstCard) // if we double click the card
        return;

    this.classList.add("flip"); 

    if(!hasFlipCard) //true
    {
        //first click
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    
    //second click
    hasFlipCard = false; 
    secondCard = this;
    checkForMatch();
}

function checkForMatch()
{
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards()//if it's a match then we are not able to click on other cards
{
   
    firstCard.removeEventListener("click" , flipCard)
    secondCard.removeEventListener("click" , flipCard)
    count++;
    score.innerHTML = `Score : ${count} <br> Failed Attempts : ${failedAttempts}`

    
}


function unflipCards()//if it's unmatch then flip the cards
{
    lockBoard = true;
    setTimeout(() =>{
        alert("Pieces do not Match.......SORRY!!!")
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        failedAttempts++;
        score.innerHTML = `Score : ${count} <br> Failed Attempts : ${failedAttempts}`
        resetBoard();
    },1000);
}

function resetBoard() //reset the board
{
    //ES6 syntax
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() //extra parenthesis for immediately invoked function expression(IIFE)
{ 
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener("click" , flipCard))