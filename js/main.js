cards = [
{
rank:'queen',
suit:'hearts',
cardImage:'/Users/Matt/fundamentals/wdi-fundamentals-memorygame/images/queen-of-hearts.png'
},
{
rank:'queen',
suit:'diamons',
cardImage:'/Users/Matt/fundamentals/wdi-fundamentals-memorygame/images/queen-of-diamonds.png'
},
{
rank:'king',
suit:'hearts',
cardImage:'/Users/Matt/fundamentals/wdi-fundamentals-memorygame/images/king-of-hearts.png'
},
{
rank:'king',
suit:'diamonds',
cardImage:'/Users/Matt/fundamentals/wdi-fundamentals-memorygame/images/king-of-diamonds.png'
},
];

var cardsInPlay = [];

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};
createBoard();

function flipCard() {
	var cardId = this.getAttribute('data-id');
	//console.log(this);
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	//if (cardsInPlay.length % 2 == 0)
	if (cardsInPlay.length === 2)
	{
		setTimeout(checkForMatch, 250);
	}
	if (cardsInPlay.length === 4) {
		setTimeout(resetGame, 1000);
	}
};

function checkForMatch (){
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");} 
else {
	console.log("bad match, reloading page")
	alert("Try again!");
	location.reload()};
}

function resetGame(){
	console.log("game finished, check for user input")
		if (confirm('You Win! \r\n\r\nPlay Again?')) {
			console.log("reloading page... please wait...")
			setTimeout(location.reload.bind(window.location),1500);
		}
		else {
			console.log("user cancelled reload")
			console.log("game has finished")
			return;
		}
	}




