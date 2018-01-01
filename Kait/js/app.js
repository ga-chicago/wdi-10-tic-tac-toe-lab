console.log('Linked.')

let $theBoard = $('#board');
let toggle = true;
let xScore = 0;
let oScore = 0;
// MAX ROUND SHOULD BE 3
let round = 0;

let xSquares = [];
let oSquares = [];



// function showX(evt){
// 	// console.log(e.currentTarget)
// 	if (toggle === true) {
// 		$(evt.currentTarget).toggleClass('o-class')
// 		$(evt.currentTarget).text('O')
// 		oSquares.push($(evt.currentTarget).attr('id'))
// 		toggle = false;
// 	} else if (toggle === false){
// 		$(evt.currentTarget).text('X')
// 		xSquares.push($(evt.currentTarget).attr('id'))
// 		toggle = true;
// 	}
// 	console.log(this)
	
// }

function checkWinner(){
	for(let i = 0; i < oSquares.length; i++){
		console.log(oSquares[i])
		if (oSquares.includes('0') === true && oSquares.includes('4') === true && oSquares.includes('8') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('2') === true && oSquares.includes('4') === true && oSquares.includes('6') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');	
		} else if (oSquares.includes('0') === true && oSquares.includes('1') === true && oSquares.includes('2') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('3') === true && oSquares.includes('4') === true && oSquares.includes('5') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('6') === true && oSquares.includes('7') === true && oSquares.includes('8') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('2') === true && oSquares.includes('5') === true && oSquares.includes('8') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('1') === true && oSquares.includes('4') === true && oSquares.includes('7') === true){
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else if (oSquares.includes('0') === true && oSquares.includes('3') === true && oSquares.includes('6') === true){	
			oScore++;
			alert('O Wins!');
			console.log('win');
		} else {
			console.log('keep trying')
		}
	}
	
	for(let i = 0; i < xSquares.length; i++){
		console.log(xSquares[i])
		if (xSquares.includes('0') === true && xSquares.includes('4') === true && xSquares.includes('8') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('2') === true && xSquares.includes('4') === true && xSquares.includes('6') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');	
		} else if (xSquares.includes('0') === true && xSquares.includes('1') === true && xSquares.includes('2') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('3') === true && xSquares.includes('4') === true && xSquares.includes('5') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('6') === true && xSquares.includes('7') === true && xSquares.includes('8') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('2') === true && xSquares.includes('5') === true && xSquares.includes('8') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('1') === true && xSquares.includes('4') === true && xSquares.includes('7') === true){
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else if (xSquares.includes('0') === true && xSquares.includes('3') === true && xSquares.includes('6') === true){	
			xScore++;
			alert('X Wins!');
			console.log('win');
		} else {
			console.log('keep trying')
		}
	}										
}

function setBoard() {
	for(let i = 0; i < 9; i++){
		let $div = $('<div class="square"></div>').attr('id', [i]);
		$theBoard.append($div);
		// one method as apposed to on method! Only allows the user to click once.
		$div.one('click', (evt) =>{
			if (toggle === true) {
		$(evt.currentTarget).toggleClass('o-class')
		$(evt.currentTarget).text('O')
		oSquares.push($(evt.currentTarget).attr('id'))
		toggle = false;
	} else if (toggle === false){
		$(evt.currentTarget).text('X')
		xSquares.push($(evt.currentTarget).attr('id'))
		toggle = true;
	}
	checkWinner()
		});
	}
}

function gameOver(){
	if (round === 3){
		alert('Game over!');
	} else if (xScore === 2){
		alert('X won!');
	} else if (oScore === 2){
		alert('Y won!');
	} else if (xScore > oScore){
		alert('X won!')
	} else if (oScore > xScore){
		alert('O won!')
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
	oSquares = [];
	xSquares = [];
	round++
	$('#X').text(xScore)
	$('#O').text(oScore)
	setBoard()
	gameOver()
})

$('#reset').on('click', ()=>{
	xScore = 0;
	$('#X').text(xScore)
	oScore = 0;
	$('#O').text(oScore)
	$('.square').remove()
	setBoard()
	console.log('clicked!')
})


// console.log($('.square').attr('id'))
/* GAME LOGIC:
•if three letters appear in a row game over
•if three letters appear in a row use a modal to notify player
•if no letters appear in a row AND all square are filled notify players of stalemate*/

