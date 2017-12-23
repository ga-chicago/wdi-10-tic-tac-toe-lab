console.log('Linked.')

let $theBoard = $('#board');
let toggle = true;
let xScore = 0;
let yScore = 0;
// MAX ROUND SHOULD BE 3
let round = 0;

let xSquares = [];
let oSquares = [];

function showX(evt){
	// console.log(e.currentTarget)
	if (toggle === true) {
		$(evt.currentTarget).toggleClass('o-class')
		$(evt.currentTarget).text('O')
		toggle = false;
	} else if (toggle === false){
		$(evt.currentTarget).text('X')
		toggle = true;
	}
	console.log(this)
}



function setBoard() {
	for(let i = 0; i < 9; i++){
		let $div = $('<div class="square"></div>').attr('id', [i]);
		$theBoard.append($div);
		// one method as apposed to on method! Only allows the user to click once.
		$div.one('click', showX);
	}
}

function checkWinner(){
	if($('#0').text() === 'X' && $('#4').text() === 'X' && $('#8') === 'X'){
		console.log('X wins')
	} else if ($('#0').text() === 'O' && $('#4').text() === 'O' && $('#8') === 'O'){
		console.log('O wins')
	} else if ($('#2').text() === 'X' && $('#4').text() === 'X' && $('#6') === 'X'){
		console.log('X wins')
	} else if ($('#2').text() === 'O' && $('#4').text() === 'O' && $('#6') === 'O'){
		console.log('O wins')
	} else if ($('#0').text() === 'X' && $('#1').text() === 'X' && $('#2') === 'X'){
		console.log('X wins')
	} else if ($('#0').text() === 'O' && $('#1').text() === 'O' && $('#2') === 'O'){
		console.log('O wins')
	} else if ($('#3').text() === 'X' && $('#4').text() === 'X' && $('#5') === 'X'){
		console.log('X wins')	
	} else if ($('#3').text() === 'O' && $('#4').text() === 'O' && $('#5') === 'O'){
		console.log('O wins')
	} else if ($('#6').text() === 'X' && $('#7').text() === 'X' && $('#8') === 'X'){
		console.log('X wins')
	} else if ($('#6').text() === 'O' && $('#7').text() === 'O' && $('#8') === 'O'){
		console.log('O wins')
	} else if ($('#2').text() === 'X' && $('#5').text() === 'X' && $('#8') === 'X'){
		console.log('X wins')
	} else if ($('#2').text() === 'O' && $('#5').text() === 'O' && $('#8') === 'O'){
		console.log('O wins')	
	}  else if ($('#1').text() === 'X' && $('#4').text() === 'X' && $('#7') === 'X'){
		console.log('X wins')
	}							
}

function gameOver(){
	if (round === 3){
		alert('Game over!');
	} else if (xScore === 2){
		alert('X won!');
	} else if (yScore === 2){
		alert('Y won!');
	}
}
// gameOver()

$('#start-button').on('click', ()=>{
	$('#start-button').remove()
	setBoard()
})


$('#next-round').on('click', ()=>{
	// console.log('Clicked!')
	// **removing the squares and rebuilding them allows the .one method to reset (basically)
	$('.square').remove()
	round++
	setBoard()
	gameOver()
})

$('#reset').on('click', ()=>{
	xScore = 0;
	yScore = 0;
	$('.square').remove()
	setBoard()
})


// console.log($('.square').attr('id'))
/* GAME LOGIC:
•if three letters appear in a row game over
•if three letters appear in a row use a modal to notify player
•if no letters appear in a row AND all square are filled notify players of stalemate*/

