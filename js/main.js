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


var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match!");




    } else {
      alert("Sorry, try again.");
    }

    //here we should flip everything to face down
  }
}


var flipCard = function() {
  var cardID = this.getAttribute("data-id");

  if (!cards[cardID].faceUp){  //if the card is face-down
    //console.log("User flipped " + cards[cardID].rank)
    cardsInPlay.push(cards[cardID]);
    cards[cardID].faceUp = true;
    this.setAttribute("src", cards[cardID].cardImage);
    checkForMatch();
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
    checkForMatch();
  }
  console.log("cardsInPlay " + cardsInPlay.length);
}




var createBoard = function() {
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);

    cardElement.addEventListener("click", flipCard);

    document.getElementById("game-board").appendChild(cardElement);
  }
}


createBoard();
