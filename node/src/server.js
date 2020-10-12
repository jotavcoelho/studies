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
  socket.on("message", message => {
    console.log(message);
  });
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

server.listen(3333, () => { // search about the difference between using app.listen and server.listen, or just what this createServer does
  console.log("Listening on:3333");
});
