console.log('working')

const gameBoard = $('#board')
let isXsTurn = true 


const addAMark = (evt) => {
	if($(evt.currentTarget).text() == "")
		if (isXsTurn) {
			$(evt.currentTarget).text("X")
			// console.log(evt.currentTarget)
			isXsTurn = false
		} else {
			// console.log(evt.currentTarget)
			$(evt.currentTarget).text("O")
			isXsTurn = true
		}
	else{
		console.log('That spot has been taken, try again.')
	}	
}

for(let i = 1; i <= 9; i++){
	$newDiv = $('<div>');
	$newDiv.addClass("square");
	$newDiv.on('click', addAMark);
	gameBoard.append($newDiv);
}






$('#clear-board').on('click', ()=>{
	console.log('clicked')
})