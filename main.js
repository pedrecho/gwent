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
app.use('/socket.io', express.static('node_modules/socket.io'));


let users = [];

app.get('/', (req, res) => {
   res.render('login')
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

io.on('connection', (socket) => {
    console.log('+jopa');
});

app.listen(8080);

