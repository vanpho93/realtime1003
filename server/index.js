const io = require('socket.io')(process.env.PORT || 3000);
const faker = require('faker');

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('CLIENT_SEND_MESSAGE', message => {
        console.log(message);
    });
    setInterval(() => {
        const message = faker.lorem.sentence(10);
        socket.emit('SERVER_SEND_MESSAGE', message);
    }, 2000);
});

console.log('Server started.');
