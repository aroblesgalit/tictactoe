let playerOne = {
    mark: ''
}

let playerTwo = {
    mark: ''
}

const Game = () => {
    // when clicking button "player x"
    document.getElementById('btn-playerx').addEventListener('click', function() {
        document.getElementById('board').style.display="flex";
        document.getElementById('playerPanel').style.display="none";
        playerOne.mark = 'X';
        playerTwo.mark = '0';
    });
    // when clicking button "player o"
    document.getElementById('btn-player0').addEventListener('click', function() {
        document.getElementById('board').style.display="flex";
        document.getElementById('playerPanel').style.display="none";
        playerOne.mark = '0';
        playerTwo.mark = 'X';
    });

    // when clicking button "New Game"
    document.getElementById('btn-nw-game').addEventListener('click', function() {
        Array.prototype.forEach.call(document.querySelectorAll('.grid-item'), gridItem => {
            gridItem.innerHTML='';
        });
        document.getElementById('message-game').style.display="none";
    });

    // when clicking button "Restart"
    document.getElementById('btn-reset-game').addEventListener('click', function() {
        window.location.reload();
    });

    const displayWinner = () => {
        if(playerTurn) {
            document.getElementById('message-game').style.display="flex";
            document.getElementById('message').innerHTML = `Player ${playerTwo.mark} wins!`;
        } else {
            document.getElementById('message-game').style.display="flex";
            document.getElementById('message').innerHTML = `Player ${playerOne.mark} wins!`;
        }   
    }

    const checkForTie = () => {
        // check to see if all cells have x's and o's but no winner
        if (board.length === 9) {
            document.getElementById('message-game').style.display="flex";
            document.getElementById('message').innerHTML = "It's a tie!";
        }

    }

    const checkWinner = () => {
        let board = [];
        board.push(document.getElementById("cell-one").innerHTML);
        board.push(document.getElementById("cell-two").innerHTML);
        board.push(document.getElementById("cell-three").innerHTML);
        board.push(document.getElementById("cell-four").innerHTML);
        board.push(document.getElementById("cell-five").innerHTML);
        board.push(document.getElementById("cell-six").innerHTML);
        board.push(document.getElementById("cell-seven").innerHTML);
        board.push(document.getElementById("cell-eight").innerHTML);
        board.push(document.getElementById("cell-nine").innerHTML);
        if (board[0] !== '') {
            if (board[0] === board[1] && board[1] === board[2]) {
                displayWinner();
            } else if (board[0] === board[3] && board[3] === board[6]) {
                displayWinner();
            } else if (board[0] === board[4] && board[4] === board[8]) {
                displayWinner();
            }
            return;
        }
        if (board[4] !== '') {
            if (board[4] === board[3] && board[3] === board[5]) {
                displayWinner();
            } else if (board[4] === board[1] && board[1] === board[7]) {
                displayWinner();
            } else if (board [4] === board[2] && board[2] === board[6]) {
                displayWinner();
            }
            return;
        }      
        if (board[8] !== '') {
            if (board[8] === board[7] && board[7] === board[6]) {
                displayWinner();
            } else if (board[8] === board[5] && board[5] === board[2]) {
                displayWinner();
            }
            return;
        }
        
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
        checkForTie();
    });
};
  
Game();