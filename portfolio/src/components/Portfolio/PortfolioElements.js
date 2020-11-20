import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #141414;

  @media screen and (max-width: 768px) {
    height: 1600px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const PortfolioWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.div`
  background: #F4EEED;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  max-height: 340px;
  max-width: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(2);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    &:hover {
    transform: scale(1.6);
    transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 480px) {
    &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
    }
  }
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #F4EEED;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #ED4933;
`;

export const PortfolioP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;