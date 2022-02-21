let socket = io();


let button = document.getElementById("button");
let login = document.getElementById("login");



button.addEventListener('click', function (e) {
    this.usernameAlreadySelected = true;
    let username = login.value;
    socket.auth = { username };
    socket.connect();
});

socket.on("connect_error", (err) => {
    if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
    }
});