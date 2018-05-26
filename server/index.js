const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', socket => {
    console.log(socket.id);
});

console.log('Server started.');
