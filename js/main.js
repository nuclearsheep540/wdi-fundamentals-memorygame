var cards = ['Queen','Queen','King','King'];
var cardsInPlay = [];

function flipCard(cardId){
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cardId);
};
flipCard(0);
flipCard(2);

if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!")} 
else {
	console.log("Try again!")}