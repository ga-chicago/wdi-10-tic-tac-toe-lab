console.log("working");


$("#clear-board").on("click",()=>{
	console.log("clicked");
})

let $board = $("#board");

for (var i = 0; i < 9; i++) {
	let $newDiv = $("<div>").addClass("square");
	$newDiv.appendTo($board);
}