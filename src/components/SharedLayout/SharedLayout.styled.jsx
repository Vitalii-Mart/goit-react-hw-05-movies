import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
margin-left: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  border: solid aqua;
  color: black;
  font-weight: 500;
  transition-duration:  400ms;
  &.active {
    color:#fff;
    background-color: aqua;
  }
  :hover,
  :focus {
    transform: scale(1.03);
    transition-duration:  400ms;
  }
`;