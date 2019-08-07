cards = ['Queen','Queen','King','King'];
cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne,cardTwo);
console.log("User flipped "+cardsInPlay);
if (cardsInPlay.length === 2 && cardOne === cardTwo)
	{
		alert('You found a match!');
	}
	else
		alert('Sorry, try again.');