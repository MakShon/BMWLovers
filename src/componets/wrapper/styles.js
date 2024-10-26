import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 84px;
  main {
    margin: 0 auto;
    padding: 45px 45px 0 45px;
    width: ${(props) => (props.$isAuthPage ? '100%' : '70%')};
  }
`;
