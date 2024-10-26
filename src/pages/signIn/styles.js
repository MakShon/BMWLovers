import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  img {
    object-fit: cover;
    width: 890px;
    height: 500px;
  }
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 380px;
`;
