import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const MovieBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px;
`;

export const MovieBox = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
`;