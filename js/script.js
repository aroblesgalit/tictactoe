let playerOne = {
    mark: ''
}

let playerTwo = {
    mark: ''
}

const Game = () => {
    document.getElementById('btn-playerx').addEventListener('click', function() {
        document.getElementById('board').style.display="flex";
        document.getElementById('playerPanel').style.display="none";
        playerOne.mark = 'X';
        playerTwo.mark = '0';
    });
    document.getElementById('btn-player0').addEventListener('click', function() {
        document.getElementById('board').style.display="flex";
        document.getElementById('playerPanel').style.display="none";
        playerOne.mark = '0';
        playerTwo.mark = 'X';
    });



    const checkWinner = () => {
        const board = [];
        board.push(document.getElementById("cell-one").innerHTML);
        board.push(document.getElementById("cell-two").innerHTML);
        board.push(document.getElementById("cell-three").innerHTML);
        board.push(document.getElementById("cell-four").innerHTML);
        board.push(document.getElementById("cell-five").innerHTML);
        board.push(document.getElementById("cell-six").innerHTML);
        board.push(document.getElementById("cell-seven").innerHTML);
        board.push(document.getElementById("cell-eight").innerHTML);
        board.push(document.getElementById("cell-nine").innerHTML);
        if (board[0].length) {
            if (board[0] === board[1]) {
                if (board[1] === board[2]) {
                    console.log("Winning!");
                }                      
            } else if (board[0] === board[3]) {
                if (board[3] === board[6]) {
                    console.log('Winner!');
                }
            } 
            else if (board[0] === board[4]) {
                if (board[4] === board[8]) {
                    console.log('Winner!');
                }
            }
        } else if (board[4] != '') {
            if (board[4] === board[3]) {
                if (board[3] === board[5]) {
                    console.log('Winning!');
                }
            } else if (board[4] === board[1]) {
                if (board[1] === board[7]) {
                    console.log('Winning!');
                }
            } else if (board [4] === board[2]) {
                if (board[2] === board[6]) {
                    console.log('Winning!');
                }
            }
         } 
        //  
        //     } 
        // } else if (board[8] != '') {
        //     if (board[8] === board[7]) {
        //         if (board[7] === board[6]) {
        //             console.log('Winning!');
        //         }
        //     } else if (board[8] === board[5]) {
        //         if (board[5] === board[2]) {
        //             console.log('Winning!');
        //         }
        //     }
        // }
        // }
    }

    let playerTurn = true;
      
    document.getElementById('board').addEventListener('click', function(e) {
        if(e.target.className === 'grid-item' && e.target.textContent === '') { 
            if (playerTurn) {  
                e.target.textContent = playerOne.mark;
                playerTurn = false;              
            } else {
                e.target.textContent = playerTwo.mark;
                playerTurn = true;
            }      
            // check if array contains values
            // check for winner
            // check if 3 in a row
            // if 3 in a row -- winner message
            // if no winner -- next player turn     
        }
        checkWinner();   

        
    });
};
  
Game();