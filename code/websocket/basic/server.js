const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Cliente conectado');

    // Enviar mensaje inicial
    socket.send('¡Bienvenido al servidor WebSocket!');

    // Escuchar mensajes del cliente
    socket.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        socket.send(`Eco: ${message}`);
    });

    socket.on('close', () => console.log('Cliente desconectado'));
});

