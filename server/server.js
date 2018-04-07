const server = require('http').createServer();
const io = require('socket.io')(server);

let currentId = 0;
const clients = [];

io.on('connection', socket => {
  socket.emit('added', currentId++);
  clients.push(currentId);
  io.on('chatMessage', ({ clientId, message }) => {
    console.log('received message')
    console.log(`client: ${clientId}`)
    console.log(`message: ${message}`)
  })
})

server.listen(4000);
