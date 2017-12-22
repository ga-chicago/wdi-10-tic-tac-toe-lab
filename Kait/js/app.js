console.log('Linked.')

let $theBoard = $('#board');
let toggle = true;
let xScore = 0;
let yScore = 0;

function showX(e){
	// console.log(e.currentTarget)
	if (toggle === true) {
		$(e.currentTarget).toggleClass('o-class')
		$(e.currentTarget).text('O')
		toggle = false;
	} else if (toggle === false){
		$(e.currentTarget).text('X')
		toggle = true;
	}
}

function setBoard() {
	for(let i = 0; i < 9; i++){
		let $div = $('<div>').attr('class', 'square');
		$theBoard.append($div);
		// one method as apposed to on method! Only allows the user to click once.
		$div.one('click', showX)
	}
}

$('#start-button').on('click', ()=>{
	$('#start-button').remove()
	setBoard()
})

// setBoard()

$('#clear-board').on('click', ()=>{
	// console.log('Clicked!')
	$('.square').remove()
	// because I used 'one' above I needed to reset the click, but I still only want it to be clicked once so I left that up there. 
	// $('.square').on('click', showX)
	setBoard()
})

/* GAME LOGIC:
•if three letters appear in a row game over
•if three letters appear in a row use a modal to notify player
•if no letters appear in a row AND all square are filled notify players of stalemate*/

