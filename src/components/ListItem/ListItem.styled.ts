import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ListItemLink = styled(Link)<{ $isDone: boolean }>`
  text-decoration: none;
  padding: 10px;

  color: ${({ $isDone }) => ($isDone ? '#2daa2d' : '#ce5f5f')};
`;