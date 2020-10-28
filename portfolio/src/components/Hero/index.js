import React, { useState } from 'react'
import Video from '../../videos/video1.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper } from './HeroElements'

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
        <HeroH1>Full Stack Software Developer</HeroH1>
        <HeroBtnWrapper>
          <Button 
          to="contact" 
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          primary='true' 
          dark='true'
          >Contact Me</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
