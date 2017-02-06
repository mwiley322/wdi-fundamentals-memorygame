
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne === cardTwo) {
//   alert("You've found a match!");
// } else if (cardThree === cardFour) {
//   alert("You've found a match!");
// } else {
//   alert("Sorry, try again");
// }


var createCards = function() {
  for (var i = 0; i <= 3; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
  }
}

// body.addEventListener('load', createCards);
createCards();
