import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll';


export const FooterContainer = styled.footer`
  background-color: #141414;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #F4EEED;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const FooterLink = styled(LinkScroll)`
  color: #F4EEED;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 18px;

  &:hover {
    color: #ED4933;
    transition: 0.3s ease-out;
  }
`;

export const FooterAltLink = styled.a`
  color: #F4EEED;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 18px;

  &:hover {
    color: #ED4933;
    transition: 0.3s ease-out;
  }
`;

export const FooterOuterLink = styled(Link)`
  color: #F4EEED;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 18px;

  &:hover {
    color: #ED4933;
    transition: 0.3s ease-out;
  }
`;

export const Connect = styled.section`
  max-width: 1400px;
  width: 100%;
`;

export const ConnectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ConnectLogo = styled(Link)`
  color: #F4EEED;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #F4EEED;
  margin-bottom: 16px;
`;

export const ConnectIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
`;

export const ConnectIconLink = styled.a`
  color: #F4EEED;
  font-size: 32px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 26px;
`;

export const LogoFirst = styled.h1`
  font-size: 38px;
  text-transform: uppercase;
`;

export const LogoLast = styled.h3`
  font-size: 28px;
  text-transform: uppercase;
`;