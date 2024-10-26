import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

export const FixedContainer = styled.div`
  width: 250px;
  height: 100%;
  background: #fff;
  position: fixed;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #808080;
  flex-grow: 1;

  span {
    margin: 20px 0 0 30px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 30px 0 30px;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
  }

  svg {
    margin-right: 8px;
    color: #888;
  }
`;

export const ListContainer = styled.ul`
  width: 100%;
  list-style: none;
  align-self: flex-start;
`;

export const ListItem = styled.li`
  color: #000;
  position: relative;
  background: #fff;

  a {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    margin: 5px 0;
    font-size: 16px;
    transition: background 0.3s ease;
    &.active {
      color: #1682fd;
      background: #a0cdf0;
      &::before {
        content: '';
        left: 0;
        background: #1682fd;
        width: 5px;
        height: 100%;
        position: absolute;
      }
    }
  }
  transition: all 0.3s;
  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2em;
  }
`;
