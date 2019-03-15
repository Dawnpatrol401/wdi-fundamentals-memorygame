var cards = ["queen","king","queen","king"];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match");
	}else{
		alert("sorry try again");
	}
}


var flipCard = function(cardId){
	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);





/*
===================
This is the old code that it wanted me to delete but I dont know what is going on so im leaving it for now.
-----------------


var cardOne = cards[0];
cardsInPlay.push(cardOne)
console.log("User flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped "+cardTwo);



===========================
*/