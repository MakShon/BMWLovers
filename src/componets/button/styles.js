import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => (props.$primary ? '#1682fd' : '#EAEAEA')};
  padding: 0 20px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => (props.$primary ? '#fff' : '#000')};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  gap: 8px;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.95);
  }
`;
