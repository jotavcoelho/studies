import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  height: 90vh;
  margin: 20px auto 0;
  background: #040108;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  > h1 {
    position: absolute;
    border: 1px solid #040108;
    border-radius: 12px;
    top: -15px;
    left: 25%;
    background: #040108;
    padding: 0 24px;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.3;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CurrentPerson = styled.div`
  padding: 20px;
  flex: 1;
  background: #040108;
  border-bottom: 1px solid #006e90;
  border-radius: 12px;
`;

export const ChatBox = styled.div`
  flex: 1;
  background: #07020d;
  border-radius: 12px;
  border-left: 1px solid #006e90;
  border-right: 1px solid #006e90;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px;

  input {
    height: 38px;
    width: 100%;
    padding: 2px 8px;
    margin-right: 12px;
    border: 1px solid #006e90;
    background: none;
    border-radius: 12px;
  }

  button {
    background: #a3e7fc;
    color: #07020d;
    padding: 3px 12px;
    font-size: 18px;
    border-radius: 12px;
  }
`;
