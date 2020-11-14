import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242424;
`;

export const FormWrap = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    height: 80%;
    min-width: 350px;
  }
`;

export const Icon = styled(Link)`
  margin: 32px auto;
  text-decoration: none;
  color: #F4EEED;
  font-weight: 600;
  font-size: 32px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ED4933;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #141414;
  max-width: 600px;
  min-width: 300px;
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

export const FormArea = styled.textarea`
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

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

// export const Text = styled.span`
//   text-align: center;
//   margin-top: 24px;
//   color: #F4EEED;
//   font-size: 14px;
// `;

export const FormError = styled.div`
  text-align: center;
  color: #F4EEED;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
