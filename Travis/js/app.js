let board = $('#board')
let	$div = $('#square');
let whosTurn = 'X';


for(let i =0; i<9; i++){
	//generate div dynamically 
	//save to a variable
	const $div = $('<div>');
	
	
	$div.addClass('square');
	$div.appendTo('#board');

	$div.on('click', ()=>{
		if(whosTurn == 'X'){
		$div.text('X');
		whosTurn = 'O';
		console.log(whosTurn)
	}else {
		$div.text('O');
		whosTurn = 'X';
		}
	})

}	