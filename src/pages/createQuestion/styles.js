import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 500px;
`;

export const CreateQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
  }
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  height: 100%;
  box-sizing: border-box;
  resize: none;
`;
