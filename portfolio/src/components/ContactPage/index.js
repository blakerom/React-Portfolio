// Thanks to the following article for helping solve sending emails without a backend by utilizing emailjs. https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9 //
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormArea, 
  FormButton,
  FormError
} from './ContactPageElement'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export default function ContactPage() {

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    const USER_ID = process.env.REACT_APP_USER_ID;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

    for(let key in state) {
      if(state[key] === '') {
        setError(`You must provide your ${key}`);
        return;
      }
      if(key === 'email') {
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const test = regex.test(state.email);
        if(test === false) {
          setError('You must provide a valid email address');
          return;
        }
      }
    }
    setError('');
    const { name, email, subject, message } = state;
    let templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

    console.log(`
    --SUBMITTING--
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
    `);

    resetForm();
  }

  function resetForm() {
    setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }))
  }


  return (
    <>
    <Container>
      <FormWrap>
        <Icon to="/">Home</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Send me a message</FormH1>
            <FormLabel  htmlFor='name'>Name</FormLabel>
            <FormInput 
            type="text" 
            name="name" 
            value={state.name} 
            onChange={handleInput} 
            />

            <FormLabel  htmlFor='email'>Email</FormLabel>
            <FormInput 
            type="email" 
            name="email" 
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={state.email} 
            onChange={handleInput} 
            />

            <FormLabel  htmlFor='subject'>Subject</FormLabel>
            <FormInput 
            type="subject" 
            name="subject" 
            value={state.subject} 
            onChange={handleInput} 
            />

            <FormLabel htmlFor='message'>Message</FormLabel>
            <FormArea 
            rows="5" 
            name="message" 
            value={state.message} 
            onChange={handleInput} 
            />

            {error && (
              <FormError>{error}</FormError>
            )}

            <FormButton type='submit'>Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
}
