var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
    faceUp: false
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
    faceUp: false
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
    faceUp: false
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
    faceUp: false
  }
];
var cardsInPlay = [];
var dealt = false;


var checkForMatch = function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
}


var flipCard = function() {
  var cardID = this.getAttribute("data-id");

  if (!cards[cardID].faceUp){  //if the card is face-down
    //console.log("User flipped " + cards[cardID].rank)
    cardsInPlay.push(cards[cardID]);
    cards[cardID].faceUp = true;
    this.setAttribute("src", cards[cardID].cardImage);
  }
  else { //card is face-up and we flip it back down
    if (cardsInPlay.length > 1){ //takes the card flipped down out of play
      removeIndex = cardsInPlay.indexOf(cards[cardID]);
      cardsInPlay.splice(removeIndex, 1);
    } else { // empties array if there are no cards in play
      cardsInPlay = [];
    }
    this.setAttribute("src", "images/back.png")
    cards[cardID].faceUp = false;
  }
  if (cardsInPlay.length === 2){
    setTimeout(checkForMatch, 200);
  }
}

// flips all cards to face down and takes all cards out of play for a new board
var flipToShuffle = function() {
  for (var i = 0; i < cards.length; i++) {
    var curCard = document.getElementById("game-board").childNodes[i];
    curCard.setAttribute("src", "images/back.png");
    cards[i].faceUp = false;
    cardsInPlay = [];
  }
}

var createBoard = function() {
  // shuffle functionality from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  var j, x, iter;
  for (iter = cards.length; iter; iter--) {
    j = Math.floor(Math.random() * iter);
    x = cards[iter - 1];
    cards[iter - 1] = cards[j];
    cards[j] = x;
  }

  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img");

    if (!dealt) { //this is the first deal
      cardElement.setAttribute("src", "images/back.png");
      cardElement.setAttribute("data-id", i);
      document.getElementById("game-board").appendChild(cardElement);

      cardElement.addEventListener("click", flipCard);
    }
  }

  dealt = true;
  flipToShuffle();
}

document.getElementById("shuffle").addEventListener("click", createBoard);
createBoard();
