const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    // Escuchar mensajes del cliente
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Reenvía el mensaje a todos los clientes
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

