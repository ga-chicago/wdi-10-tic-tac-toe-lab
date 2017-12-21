console.log('Linked.')

$('#clear-board').on('click', ()=>{
	console.log('Clicked!')
})

let $theBoard = $('#board');

for(let i = 0; i < 9; i++){
	let $div = $('<div>').attr('class', 'square');
	$theBoard.append($div);
	$div.on('click', showX)
}
