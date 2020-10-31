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
  ConnectIconLink
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
              <FooterLinkTitle>Send me a message</FooterLinkTitle>
              <FooterLink>Skills</FooterLink>
              <FooterLink>Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Connect with me</FooterLinkTitle>
              <FooterLink>Github</FooterLink>
              <FooterLink>LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Connect>
          <ConnectWrap>
            <ConnectLogo to='/'>
              Blake Romero
            </ConnectLogo>
            <WebsiteRights>Blake Romero &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            <ConnectIcons>
              <ConnectIconLink href="/" target="_blank" aria-label="GitHub">
                <FaGithub />
              </ConnectIconLink>
              <ConnectIconLink href="/" target="_blank" aria-label="Linkedin">
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
