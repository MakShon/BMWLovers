import styled from 'styled-components';

export const ProfileDisplayContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 30px 0;
  height: fit-content;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
