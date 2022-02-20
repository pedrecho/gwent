let players = document.getElementsByClassName('player');
players[0].innerHTML = '<div class="blue"></div>';
players[1].innerHTML = '<div class="red"></div>';

let board = document.getElementById('board');
board.innerHTML += '<div class="deck" pos=' + 0 + '></div>';
for(let i = 1; i < 7; ++i)
    board.innerHTML += '<div class="row" pos=' + i + '></div>';
board.innerHTML += '<div class="deck" pos=' + 7 + '></div>';



const socket = io();