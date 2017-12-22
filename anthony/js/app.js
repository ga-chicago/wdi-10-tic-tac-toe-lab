console.log('working')

const gameBoard = $('#board')
let isXsTurn = true
let xPlays = [];
let oPlays = [];
let winningPlays = [123, 456, 789, 147, 258, 369, 159, 357]
let player = "X"


const addAMark = (evt) => {
	if($(evt.currentTarget).text() == "")
		if (isXsTurn) {
			$(evt.currentTarget).text("X");
			// xPlays.push($(evt.currentTarget).attr('id'));
			// console.log($(evt.currentTarget).attr('id'))

			// console.log(evt.currentTarget)
			checkForWinner(player);
			isXsTurn = false;
			player = "O"
			
		} else {
			// console.log(evt.currentTarget)
			$(evt.currentTarget).text("O");
			oPlays.push($(evt.currentTarget).attr('id'));
			checkForWinner(player);
			isXsTurn = true;
			player = "X"
		}
	else{
		console.log('That spot has been taken, try again.');
	}
		
}

const resetGame = () => {
	$(".square").empty();
}

const checkForWinner = (player) => {
	//Top Row across
	if ($('#spot-1').text() === player && $('#spot-2').text() === player && $('#spot-3').text() === player) {
		console.log("Winner")
	
	// Middle Row Across
	} else if ($('#spot-4').text() === player && $('#spot-5').text() === player && $('#spot-6').text() === player) {
		console.log("Winner")
	
	//Bottom Row Across
	} else if ($('#spot-7').text() === player && $('#spot-8').text() === player && $('#spot-9').text() === player) {
		console.log("Winner")
	
	//Left column
	} else if ($('#spot-1').text() === player && $('#spot-4').text() === player && $('#spot-7').text() === player) {
		console.log("Winner")
	
	//middle column
	} else if ($('#spot-2').text() === player && $('#spot-5').text() === player && $('#spot-8').text() === player) {
		console.log("Winner")
	
	//right column
	} else if ($('#spot-3').text() === player && $('#spot-6').text() === player && $('#spot-9').text() === player) {
		console.log("Winner")
	
	//top left to bottom right diag
	} else if ($('#spot-1').text() === player && $('#spot-5').text() === player && $('#spot-9').text() === player) {
		console.log("Winner")
	
	//top right to bottomw left diag
	} else if ($('#spot-3').text() === player && $('#spot-5').text() === player && $('#spot-7').text() === player) {
		console.log("Winner")
	}else {
		console.log("Keep Playing")
	}
}


for(let i = 1; i <= 9; i++){
	$newDiv = $('<div>');
	$newDiv.addClass("square");
	$newDiv.attr('id', "spot-"+i);
	$newDiv.on('click', addAMark);
	gameBoard.append($newDiv);
}






$('#clear-board').on('click', resetGame)