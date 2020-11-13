import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#ED4933' : '#F4EEED')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#242424' : '#ED4933')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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
    background: ${({primary}) => (primary ? '#242424' : '#ED4933')};
    color: ${({dark}) => (dark ? '#ED4933' : '#F4EEED')};
  }
`;
