import React, { useState } from 'react'
import Video from '../../videos/video1.mp4'
import { Button } from '../HeroButtonElement'
import { FaArrowDown } from 'react-icons/fa';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroBtnWrapper 
} from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello there!</HeroH1>
        <HeroBtnWrapper>
          <Button 
          to="about" 
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          >
            <FaArrowDown />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
