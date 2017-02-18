//
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardOne === cardTwo) {
//   alert("You've found a match!");
// } else if (cardThree === cardFour) {
//   alert("You've found a match!");
// } else {
//   alert("Sorry, try again");
// }


// var createCards = function() {
//   for (var i = 0; i <= 3; i++) {
//     var newCard = document.createElement('div');
//     newCard.className = 'card';
//     document.getElementById('game-board').appendChild(newCard);
//   }
// }

// body.addEventListener('load', createCards);
// createCards();

var cards = ['unicorn', 'tiger', 'unicorn', 'tiger', 'unicorn', 'tiger', 'tiger', 'unicorn', 'tiger', 'tiger', 'unicorn', 'unicorn'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createCards() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = '?';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
     if (this.getAttribute('data-card') === 'tiger') {
       this.innerHTML = "<img src ='http://i.imgur.com/Sodk5Qe.jpg' alt='Tiger'>";
    } else {
      this.innerHTML = "<img src='http://i.imgur.com/DRVkkhB.jpg' alt='Unicorn'>";
    }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

// function isMatch(cards) {
//   if (cards[0] === cards[1]) {
//     var scoreboard = document.getElementById('scoreboard');
//     scoreboard.className = 'match';
//     scoreboard.textContent = "You found a match!";
//   } else {
//       alert("Sorry, try again!");
//   }
// }
//
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert('You found a match!');
  } else {
      alert("Sorry, try again!");
  }
}

createCards();
