import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import Button from '../components/Button';
import Textarea from '../components/Textarea';

const Container = styled.div`
  margin: auto;
  padding: 1rem;

  border: 2px solid #EEE;

  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.125rem;

  border-top: 3px solid #CCC;
  border-bottom: 3px solid #CCC;
  text-align: center;
`;

const Form = styled.form``;

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;

  color: #333;
  margin-bottom: 0.5rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;

  font-size: 16px;
  padding: 0.75rem 0.25rem;
`;

const StyledTextarea = Input.withComponent(Textarea);

const ButtonContainer = styled.div`
  display: flex;
`;

export default class NewPost extends Component {
  render() {
    return (
      <Container>
        <Title>Add a new post</Title>
        <Formik initialValues={{ content: '', title: '' }} render={({ handleBlur, handleChange, handleReset, handleSubmit, isSubmitting, values }) => (
          <Form onSubmit={handleSubmit}>
            <Label for="title">
              Title
              <Input id="title" name="title" type="text" onChange={handleChange} onBlur={handleBlur} value={values.title} />
            </Label>
            <Label for="content">
              Content
              <StyledTextarea id="content" name="content" type="text" onChange={handleChange} onBlur={handleBlur} value={values.content} />
            </Label>
            <ButtonContainer>
              <Button type="reset" onClick={handleReset}>Reset</Button>
              <Button type="submit" disabled={isSubmitting} primary>Submit</Button>
            </ButtonContainer>
          </Form>
        )} />
      </Container>
    );
  }
}
