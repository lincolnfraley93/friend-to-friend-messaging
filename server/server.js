const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  console.log('connected')
  client.on('event', data => {
    console.log('event')
    console.log(data)
  });
  client.on('disconnect', () => {
    console.log('disconnected')
  })
})

server.listen(4000);
