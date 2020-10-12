import express from 'express';
import socketio from 'socket.io';
import { createServer } from 'http';

import routes from './routes';

const app = express();
const server = createServer(app); 
const io = socketio(server);

app.use(express.json());

app.use(routes);

io.on('connection', socket => {
  console.log('a user connected');
});

server.listen(3333, () => { // search about the difference between using app.listen and server.listen, or just what this createServer does
  console.log("Listening on:3333");
});
