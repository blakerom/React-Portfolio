import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from '../../images/pnw.jpg'

export const Container = styled.div`
min-height: 692px;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #F4EEED;
  font-weight: 600;
  font-size: 32px;
  
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  background: #141414;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #F4EEED;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #F4EEED;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #ED4933;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #F4EEED;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #F4EEED;
  font-size: 14px;
`;

export const ContactPageBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #141414;
`;