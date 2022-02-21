let players = document.getElementsByClassName('player');
players[0].innerHTML = '<div class="blue"></div>';
players[1].innerHTML = '<div class="red"></div>';

let board = document.getElementById('board');
board.innerHTML += '<div class="deck" pos=' + 0 + '></div>';
for(let i = 1; i < 7; ++i)
    board.innerHTML += '<div class="row" pos=' + i + '></div>';
board.innerHTML += '<div class="deck" pos=' + 7 + '></div>';

let hint = document.getElementById('hint');


const socket = io();
hint.addEventListener('click', function (e) {
    socket.emit('click');
});

socket.on('click', function(b) {
    if(b){
        hint.innerHTML = '<div class="blue pppp">pidor</div>';
    }
    else{
        hint.innerHTML = '<div class="red pppp">Ivan loh</div>';
    }
});