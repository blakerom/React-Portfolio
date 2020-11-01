import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  Connect, 
  ConnectWrap, 
  ConnectLogo, 
  WebsiteRights, 
  ConnectIcons, 
  ConnectIconLink,
  Logo,
  LogoFirst, 
  LogoLast
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Info</FooterLinkTitle>
              <FooterLink>About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Work</FooterLinkTitle>
              <FooterLink>Portfolio</FooterLink>
              <FooterLink>Skills</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Send a Message</FooterLinkTitle>
              <FooterLink>Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterLink>Github</FooterLink>
              <FooterLink>LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Connect>
          <ConnectWrap>
            <ConnectLogo to='/'>
              <Logo>
                <LogoFirst>Blake</LogoFirst>
                <LogoLast>Romero</LogoLast>
              </Logo>
            </ConnectLogo>
            <WebsiteRights>Blake Romero &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            <ConnectIcons>
              <ConnectIconLink href="/" target="_blank" aria-label="GitHub">
                <FaGithub />
              </ConnectIconLink>
              <ConnectIconLink href="//https://www.linkedin.com/in/blakeromero/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </ConnectIconLink>
            </ConnectIcons>
          </ConnectWrap>
        </Connect>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
