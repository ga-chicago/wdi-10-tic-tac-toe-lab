console.log('working')

const gameBoard = $('#board')

for(let i = 1; i <= 9; i++){
	$newDiv = $('<div>');
	$newDiv.addClass("square");
	// $newDiv.on('click', someFunction);
	gameBoard.append($newDiv);
}






$('#clear-board').on('click', ()=>{
	console.log('clicked')
})