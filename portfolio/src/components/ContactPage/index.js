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
  Text
} from './ContactPageElements'

const ContactPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Home</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Send me a message</FormH1>
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
