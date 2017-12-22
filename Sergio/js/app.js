
let $modal = $("#myModal");
let $board = $("#board");
let XvsO = true;
let whoWon = {};

let rowOne = [];
let rowTwo = [];
let rowThree = [];
let columnOne = [];
let columnTwo = [];
let columnThree = [];
let downStairs = [];
let upstairs = [];

function congratulate(player){
	$(".modal-content").text(player + " Wins!")
	$modal.css("display","block");
}

function checkIfWon(player){ // Refactor this when you have time too much if else 
	if (whoWon.cell0 === player && whoWon.cell1 === player && whoWon.cell2 === player){ // Row 1 of 3
		$("#cell0").addClass("winner");
		$("#cell1").addClass("winner");
		$("#cell2").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell3 === player && whoWon.cell4 === player && whoWon.cell5 === player){ // Row 1 of 3
		$("#cell3").addClass("winner");
		$("#cell4").addClass("winner");
		$("#cell5").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell6 === player && whoWon.cell7 === player && whoWon.cell8 === player){ // Row 1 of 3
		$("#cell3").addClass("winner");
		$("#cell4").addClass("winner");
		$("#cell5").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell0 === player && whoWon.cell3 === player && whoWon.cell6 === player){ // Row 1 of 3
		$("#cell0").addClass("winner");
		$("#cell3").addClass("winner");
		$("#cell6").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell1 === player && whoWon.cell4 === player && whoWon.cell7 === player){ // Row 1 of 3
		$("#cell1").addClass("winner");
		$("#cell4").addClass("winner");
		$("#cell7").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell2 === player && whoWon.cell5 === player && whoWon.cell8 === player){ // Row 1 of 3
		$("#cell2").addClass("winner");
		$("#cell5").addClass("winner");
		$("#cell8").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell0 === player && whoWon.cell4 === player && whoWon.cell8 === player){ // Row 1 of 3
		$("#cell0").addClass("winner");
		$("#cell4").addClass("winner");
		$("#cell8").addClass("winner");
		return congratulate(player);
	} else if (whoWon.cell2 === player && whoWon.cell4 === player && whoWon.cell6 === player){ // Row 1 of 3
		$("#cell2").addClass("winner");
		$("#cell4").addClass("winner");
		$("#cell6").addClass("winner");
		return congratulate(player);
	}
}

// creates a grid of 9 cells to play on
for (var i = 0; i < 9; i++) { 
	let $newDiv = $("<div>").addClass("square").attr("id","cell"+i);
	$newDiv.appendTo($board);
}
// Adds an eventlistener to the cell that is clicked
$(".square").on("click", ()=>{
	let square = event.currentTarget; 
	let $id = $(square).attr("id"); // The Id of each cell will be used to create a key value pair in the whoWon object
	
	if (XvsO === true){
		$(square).text("X");
		whoWon[$id] = "playerOne";
		XvsO = false;
		checkIfWon("playerOne"); // Function that checks to see if player one wins
	} else {
		$(square).text("O");
		whoWon[$id] = "playerTwo";
		XvsO = true;
		checkIfWon("playerTwo"); // Function that checks to see if player one wins
	}
});

$("#clear-board").on("click", ()=>{
	$(".square").text("");
	for(key in whoWon){
		delete whoWon[key];
	}
	for (var i = 0; i < 9; i++) {
		$("#cell"+ i).removeClass("winner");
	}
})

$modal.on("click", ()=>{
    $modal.css("display","none");
   	$(".square").text("");
	for(key in whoWon){
		delete whoWon[key];
	}
	for (var i = 0; i < 9; i++) {
		$("#cell"+ i).removeClass("winner");
	}
})







