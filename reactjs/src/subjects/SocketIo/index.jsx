import React, { useEffect } from 'react';

import io from 'socket.io-client';

import { Container } from './styles';

export default function SocketIo() {
  useEffect(() => {
    const socket = io("http://localhost:3333");
  });

  return (
    <h1>SocketIo</h1>
  )
}