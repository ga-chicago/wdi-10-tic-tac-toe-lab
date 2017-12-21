let board = $('#board')
let	$div = $('#square');


for(let i =0; i<9; i++){
	//generate div dynamically 
	//save to a variable
	const $div = $('<div>');
	$div.text([i]);
	$div.addClass('square')
	$div.appendTo('#board');
}