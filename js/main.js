var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];






var checkForMatch = function() {


  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  } else if (cardsInPlay.length > 2) {
    console.log("More than two cards in play");
  }
}

var flipCard = function() {
  var cardID = this.getAttribute("data-id");

  console.log("User flipped " + cards[cardID].rank)
  cardsInPlay.push(cards[cardID].rank);
  console.log(cards[cardID].cardImage + " " + cards[cardID].suit);

  this.setAttribute("src", cards[cardID].cardImage);

  checkForMatch();
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
