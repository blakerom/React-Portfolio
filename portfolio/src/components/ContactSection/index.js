import React, {useState} from 'react';
import Image from '../../images/pnw.jpg'
import { Button } from '../ContactButtonElement'
import { 
  ContactContainer, 
  ContactBg, 
  ImageBg, 
  ContactContent, 
  ContactH1, 
  ContactBtnWrapper 
} from './ContactElements'

const ContactSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ContactContainer id="contact">
      <ContactBg>
        <ImageBg src={Image} alt={'PNW'}/>
      </ContactBg>
      <ContactContent>
        <ContactH1>Collaborate with me or just say hi.</ContactH1>
        <ContactBtnWrapper>
          <Button 
          to="contact" 
          onMouseEnter={onHover}
          onMouseLeave={onHover} 
          primary='true' 
          dark='true'
          >Contact Me</Button>
        </ContactBtnWrapper>
      </ContactContent>
    </ContactContainer>
  )
}

export default ContactSection
