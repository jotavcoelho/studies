import React, { useEffect } from 'react';

import io from 'socket.io-client';

import { Container, ChatBox, InputArea } from './styles';

export default function SocketIo() {
  useEffect(() => {
    const socket = io("http://localhost:3333");
  });

  return (
    <Container>
      <h1>Little real-time chat using Socket.io</h1>
      <ChatBox></ChatBox>
      <InputArea>
        <input type="text"/>
        <button type="button">Send</button>
      </InputArea>
    </Container>
  )
}