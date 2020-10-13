import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';

import { 
  Container, 
  Sidebar,
  UsernameContainer,
  ContactsContainer,
  ChatContainer,
  CurrentPerson,
  ChatBox, 
  InputArea,
} from './styles';

export default function SocketIo() {
  const [newUsername, setNewUsername] = useState('');
  const [currentUsername, setCurrentUsername] = useState('');
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState('');
  // const socket = io("http://localhost:3333");
  
  useEffect(() => {
    setSocket(() => io("http://localhost:3333"));
  }, []);

  useEffect(() => {
    
  }, []);

  function sendMessage() {
    setMessage("");
    socket.emit("message", message);
  }

  return (
    <Container>
      <h1>Little real-time chat using Socket.io</h1>
      <Sidebar>
        <UsernameContainer>
          <input 
            type="text" 
            name="username"
            placeholder="Username"
            value={newUsername}
            onChange={e => setNewUsername(e.target.value)}
          />
          <button onClick={() => setCurrentUsername(newUsername)}>Set Username</button>
          <h3>{currentUsername || "Your username will be here"}</h3>
        </UsernameContainer>
        <ContactsContainer>
          <h1>People</h1>
        </ContactsContainer>
      </Sidebar>
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