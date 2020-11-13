import React from 'react'
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
  FormButton
} from './ContactPageElements'

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <>
      <Container>
        <FormWrap>
          <Icon to="/">Home</Icon>
          <FormContent>
            <Form action="#" onSubmit={this.submitEmail.bind(this)} method="POST">
              <FormH1>Send me a message</FormH1>
              <FormLabel  htmlFor='for'>Name</FormLabel>
              <FormInput type='text' required value={this.state.name} onChange={this.onNameChange.bind(this)} />
              <FormLabel  htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              <FormLabel  htmlFor='for'>Subject</FormLabel>
              <FormInput type='text' value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormArea type='textarea' 
              rows='5' 
              required value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              <FormButton type='submit'>Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      </>
    );
  }
}

export default ContactPage
