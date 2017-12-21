console.log('Linked.')

$('#clear-board').on('click', ()=>{
	console.log('Clicked!')
})

let $theBoard = $('#board');

function showX(e){
	// console.log(e.currentTarget)
	$(e.currentTarget).text('X');

}

for(let i = 0; i < 9; i++){
	let $div = $('<div>').attr('class', 'square');
	$theBoard.append($div);
	$div.on('click', showX)
}
