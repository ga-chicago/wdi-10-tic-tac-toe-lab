console.log('Linked.')

let $theBoard = $('#board');
let toggle = true;

function showX(e){
	// console.log(e.currentTarget)
	if (toggle === true) {
		$(e.currentTarget).toggleClass('o-class')
		$(e.currentTarget).text('O')
		toggle = false;
	} else if (toggle === false){
		$(e.currentTarget).text('X')
		toggle = true;
	}		

}

for(let i = 0; i < 9; i++){
	let $div = $('<div>').attr('class', 'square');
	$theBoard.append($div);
	$div.on('click', showX)
}

$('#clear-board').on('click', ()=>{
	// console.log('Clicked!')
	$('.square').text('')
})
