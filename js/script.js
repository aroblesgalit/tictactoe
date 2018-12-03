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
    document.getElementById('board').addEventListener('click', function(e) {
        if(e.target.className === 'grid-item') {
            e.target.textContent = playerOne.mark;
        }
        
    });

    // create a function that switches between player one and player two
};
  
Game();
