console.log("working");


$("#clear-board").on("click",()=>{
	console.log("clicked");
})

let $board = $("#board");

let someFunction = ()=>{

}

for (var i = 0; i < 9; i++) {
	let $newDiv = $("<div>").addClass("square");
	$newDiv.on("click", someFunction);
	$newDiv.appendTo($board);
}