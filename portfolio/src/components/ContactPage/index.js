import React from 'react'
import Image from '../../images/alone.jpg'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ContactPageBg,
  ImageBg
} from './ContactPageElements'

const ContactPage = () => {
  return (
    <>
      <Container>
        <ContactPageBg>
          <ImageBg src={Image} alt={'PNW'} />
        </ContactPageBg>
        <FormWrap>
          <Icon to="/">Home</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in</FormH1>
              <FormLabel  htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forget</Text> 
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default ContactPage
