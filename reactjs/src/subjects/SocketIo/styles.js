import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  height: 90vh;
  margin: 20px auto 0;
  background: #040108;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    border: 1px solid #040108;
    border-radius: 12px;
    margin-top: -15px;
    background: #040108;
    padding: 0 6px;
  }
`;

export const ChatBox = styled.div`
  flex: 1;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px;

  input {
    height: 30px;
    width: 100%;
    padding: 2px 4px;
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
