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
			xPlays.push($(evt.currentTarget).attr('id'));
			// console.log($(evt.currentTarget).attr('id'))

			// console.log(evt.currentTarget)
			isXsTurn = false;
			player = "Y"
			
		} else {
			// console.log(evt.currentTarget)
			$(evt.currentTarget).text("O");
			oPlays.push($(evt.currentTarget).attr('id'));			
			isXsTurn = true;
			Player = "X"
		}
	else{
		console.log('That spot has been taken, try again.');
	}
	checkForWinner()	
}

const resetGame = () => {
	$(".square").empty();
}

const checkForWinner = (player) => {
	//Top Row across
	if ($('#spot-1').text() === "X" && $('#spot-2').text() === "X" && $('#spot-3').text() === "X") {
		console.log("Winner")
	
	// Middle Row Across
	} else if ($('#spot-4').text() === "X" && $('#spot-5').text() === "X" && $('#spot-6').text() === "X") {
		console.log("Winner")
	
	//Bottom Row Across
	} else if ($('#spot-7').text() === "X" && $('#spot-8').text() === "X" && $('#spot-9').text() === "X") {
		console.log("Winner")
	
	//Left column
	} else if ($('#spot-1').text() === "X" && $('#spot-4').text() === "X" && $('#spot-7').text() === "X") {
		console.log("Winner")
	
	//middle column
	} else if ($('#spot-2').text() === "X" && $('#spot-5').text() === "X" && $('#spot-8').text() === "X") {
		console.log("Winner")
	
	//right column
	} else if ($('#spot-3').text() === "X" && $('#spot-6').text() === "X" && $('#spot-9').text() === "X") {
		console.log("Winner")
	
	//top left to bottom right diag
	} else if ($('#spot-1').text() === "X" && $('#spot-5').text() === "X" && $('#spot-9').text() === "X") {
		console.log("Winner")
	
	//top right to bottomw left diag
	} else if ($('#spot-3').text() === "X" && $('#spot-5').text() === "X" && $('#spot-7').text() === "X") {
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