console.log("working");


$("#clear-board").on("click",()=>{
	console.log("clicked");
})

let $board = $("#board");

// let someFunction = ()=>{
// 	e.text("X");
// 	console.log("click works X")
// }

for (var i = 0; i < 9; i++) {
	let $newDiv = $("<div>").addClass("square");
	$newDiv.appendTo($board);
}

$(".square").on("click", ()=>{
	let square = event.currentTarget; 
	// console.log($square)
	$(square).text("X");
});