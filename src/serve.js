const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// var position = {
//     x: 200,
//     y: 200
// }
// name dir :: C:\Users\Gabriel Alexandre\Desktop\learn_vue\learn-vue\src
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.on("connection", (socket) => {
    socket.on('message', (msg) => io.emit('message', msg))
    // socket.emit("position", position);
});

http.listen(3000, () => console.log('Server listen in port 3000!'));
