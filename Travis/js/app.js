let board = $('#board')
let	$div = $('#square');
let whosTurn = 'X';
let XPlays = '';
let OPlays = '';
// let virtualBoard=[];\

// keep track of the game 
//let gameObj = {1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''}

	// possilbe wins 
		// 012 || 036 || 048 || 678 || 246 || 258
let possibleWins = [123,147,159,789,357,369]


for(let i =1; i<=9; i++){
	//generate div dynamically 
	//save to a variable
	const $div = $('<div>');
	
	//$div.text([i]);
	$div.addClass('square');
	$div.addClass(""+[i]+"");
	$div.appendTo('#board');
	// add to array for a virtual board for logic
	// virtualBoard.push(i);

	$div.on('click', ()=>{
		gameObj[i] = whosTurn;
		
		console.log(XPlays);
		// console.log(whosTurn);
		// console.log(i);
		// console.log(gameObj);
	// switch turns
		if(whosTurn == 'X'){
			$div.text('X');
			XPlays = XPlays + ""+i;
			logic()
			whosTurn = 'O';
		}else {
			$div.text('O');
			OPlays = OPlays + ""+i;
			logic()
			whosTurn = 'X';
		}
	
	})

}	

// game logic 

let logic = function(){
// check for a winner
	for(i=0; i<possibleWins.length;i++){
		// loop all possible wins
		let win = possibleWins[i].toString(10).split("");
		// console.log(XPlays.includes(win[0]))
		//check if xplays inclueds three winning numbers from each array 
			if (XPlays.includes(win[0]) && XPlays.includes(win[1]) && XPlays.includes(win[2])){
				 alert("X wins!!")

			}else if (OPlays.includes(win[0]) && OPlays.includes(win[1]) && OPlays.includes(win[2])){
				alert("O wins!!")
			}

		// str.includes
	}


}



// future improvements:
	// stop the clickability of boxes after they've been clicked. 
	// check for cats game 
	// reset after game is over
	// keep track of game wins 













