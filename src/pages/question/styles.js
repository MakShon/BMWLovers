import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #808080;
    margin: 10px 0;
    text-align: center;
  }
  gap: 20px;
`;

export const CreateAnswer = styled.div`
  padding: 30px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  button {
    align-self: flex-end;
  }
`;
