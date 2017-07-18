var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  } else if (cardsInPlay.length > 2) {
    console.log("More than two cards in play");
  }
}


var flipCard = function(cardID) {
  console.log("User flipped " + cards[cardID])
  cardsInPlay.push(cards[cardID]);
  checkForMatch();
}


flipCard(0);
flipCard(2);
