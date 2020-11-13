import styled from 'styled-components'

export const Button = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  padding: 12px 30px;
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
    color: ${({dark}) => (dark ? '#ED4933' : '#F4EEED')};
  }
`;
