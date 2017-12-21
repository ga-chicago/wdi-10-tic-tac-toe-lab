console.log('working')

const gameBoard = $('#board')


const addAnX = (evt) => {
	$(evt.currentTarget).text("X")
}

for(let i = 1; i <= 9; i++){
	$newDiv = $('<div>');
	$newDiv.addClass("square");
	$newDiv.on('click', addAnX);
	gameBoard.append($newDiv);
}






$('#clear-board').on('click', ()=>{
	console.log('clicked')
})