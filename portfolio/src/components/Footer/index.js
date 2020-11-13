import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  FooterAltLink, 
  FooterOuterLink, 
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

const toggleHome = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Info</FooterLinkTitle>
              <FooterLink 
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Work</FooterLinkTitle>
              <FooterLink 
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Portfolio</FooterLink>
              <FooterLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Skills</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Send a Message</FooterLinkTitle>
              <FooterOuterLink to="contact">Contact</FooterOuterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterAltLink
              href="//github.com/blakerom" target="_blank" aria-label="GitHub"
              >Github</FooterAltLink>
              <FooterAltLink
              href="//linkedin.com/in/blakeromero/" target="_blank" aria-label="Linkedin"
              >LinkedIn</FooterAltLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <Connect>
          <ConnectWrap>
            <ConnectLogo to='/' onClick={toggleHome}>
              <Logo>
                <LogoFirst>Blake</LogoFirst>
                <LogoLast>Romero</LogoLast>
              </Logo>
            </ConnectLogo>
            <WebsiteRights>Blake Romero &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            <ConnectIcons>
              <ConnectIconLink href="//github.com/blakerom" target="_blank" aria-label="GitHub">
                <FaGithub />
              </ConnectIconLink>
              <ConnectIconLink href="//linkedin.com/in/blakeromero/" target="_blank" aria-label="Linkedin">
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
