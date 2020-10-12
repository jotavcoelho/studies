import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';

import { 
  Container, 
  ContactsContainer,
  ChatContainer,
  CurrentPerson,
  ChatBox, 
  InputArea,
} from './styles';

export default function SocketIo() {
  const [message, setMessage] = useState('');

  const socket = io("http://localhost:3333");
  
  useEffect(() => {
  }, []);

  useEffect(() => {
    
  }, [message]);

  function sendMessage() {
    setMessage("");
    socket.emit("message", message);
  }

  return (
    <Container>
      <h1>Little real-time chat using Socket.io</h1>
      <ContactsContainer>
        <h1>People</h1>
      </ContactsContainer>
      <ChatContainer>
        <ChatBox>
          <CurrentPerson>
            <h2>Name</h2>
          </CurrentPerson>
        </ChatBox>
        <InputArea>
          <input 
            type="text"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          />
          <button 
            type="button"
            onClick={sendMessage}
          >Send</button>
        </InputArea>
      </ChatContainer>
    </Container>
  )
}