const io = require('socket.io')(process.env.PORT || 3000);
const faker = require('faker');

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('CLIENT_SEND_MESSAGE', message => {
        io.emit('SERVER_SEND_MESSAGE', message);
    });
});

console.log('Server started.');
