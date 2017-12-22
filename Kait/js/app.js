console.log('Linked.')

let $theBoard = $('#board');
let toggle = true;
let xScore = 0;
let yScore = 0;
// MAX ROUND SHOULD BE 3
let round = 0;

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
	console.log(this)
}

function setBoard() {
	for(let i = 0; i < 9; i++){
		let $div = $('<div class="square"></div>').attr('id', [i]);
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

$('#next-round').on('click', ()=>{
	// console.log('Clicked!')
	// **removing the squares and rebuilding them allows the .one method to reset (basically)
	$('.square').remove()
	round++
	setBoard()
})

$('#reset').on('click', ()=>{
	xScore = 0;
	yScore = 0;
	$('.square').remove()
	setBoard()
})


console.log($('.square').attr('id'))
/* GAME LOGIC:
•if three letters appear in a row game over
•if three letters appear in a row use a modal to notify player
•if no letters appear in a row AND all square are filled notify players of stalemate*/

