import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  Logo,
  LogoFirst,
  LogoLast 
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 120) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <Logo>
              <LogoFirst>Blake</LogoFirst>
              <LogoLast>Romero</LogoLast>
            </Logo>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
