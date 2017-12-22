console.log("working");


$("#clear-board").on("click",()=>{
	console.log("clicked");
})

let $board = $("#board");

let XvsO = true;

for (var i = 0; i < 9; i++) {
	let $newDiv = $("<div>").addClass("square");
	$newDiv.appendTo($board);
}

$(".square").on("click", ()=>{
	let square = event.currentTarget; 
	// console.log($square)
	if (XvsO === true){
		$(square).text("X");
		XvsO = false;
	} else {
		$(square).text("O");
		XvsO = true;
	}
});

$("#clear-board").on("click", ()=>{
	$(".square").text("");
})