import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: #ED4933;
  white-space: nowrap;
  padding: 5px;
  color: ${({dark}) => (dark ? '#242424' : '#ED4933')};
  font-size: 48px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #242424;
    color: ${({dark}) => (dark ? '#ED4933' : '#F4EEED')};
  }
`;
