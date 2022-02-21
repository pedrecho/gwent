const { urlencoded } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/views', express.static('views'));


let users = [];

app.get('/', (req, res) => {
   res.render('index', {
       usernameAlreadySelected: false,
   })
});


app.post('/', (req, res) => {
    console.log(req.ip);
    if(users.find(item => item.req.ip === req.ip) === undefined) {
        console.log('new');
        users.push({
            req: req,
            res: res
        });
    }
   res.render('game')
});

let b = true;

io.on('connection', (socket) => {
    // console.log();
    socket.on('disconnect', () => {
        // console.log('-' + socket.conn.remoteAddress);
    });
    socket.on('click', () => {
        b = !b;
        io.emit('click', b);
    });
});

io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
        return next(new Error("invalid username"));
    }
    console.log('+ ' + username + ' | ' + socket.conn.remoteAddress)
    socket.username = username;
    next();
});

server.listen(8080, () => {
    console.log('listening on *:8080');
});

// app.listen('8080');

