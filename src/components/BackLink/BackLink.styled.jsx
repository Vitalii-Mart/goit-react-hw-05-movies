import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 8px 0;
color: black;
text-decoration: none;
font-weight: 500;
text-transform: uppercase;
transition-duration:  1000ms;

:hover {
  color: aqua;
  transition-duration:  400ms;
}
`;