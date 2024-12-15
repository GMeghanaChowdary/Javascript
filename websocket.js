const socket = new WebSocket('wss://echo.websocket.org');
socket.addEventListener('open', () => socket.send('Hello Server'));
socket.addEventListener('message', (event) => console.log('Message from server:', event.data));
