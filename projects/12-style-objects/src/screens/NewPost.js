import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';

import Alert from '../components/Alert';
import Button from '../components/Button';
import Textarea from '../components/Textarea';

import { SLIDE_IN } from '../style/animations';

const Container = styled.div`
  margin: auto;
  padding: 1rem;

  ${SLIDE_IN};
  border: 2px solid #eee;

  @media only screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

const Title = styled.h1(props => ({
  margin: 0,
  marginBottom: '0.5rem',
  padding: '0.5rem 0.125rem',
  textAlign: 'center',
  borderTop: `3px solid ${props.theme.base.color}`,
  borderBottom: `3px solid ${props.theme.base.color}`
}));

const Form = styled.form``;

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;

  color: ${props => props.theme.base.color};
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

  > button:first-child {
    margin-right: 0.5rem;
  }
`;

const validationSchema = yup.object().shape({
  content: yup.string().required(),
  title: yup.string().required()
});

export default class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };
  }

  getStatusMessage(status) {
    switch (status) {
      case 'success':
        return 'Thanks. We got your blog post!';
      case 'error':
        return 'Oh no. Something has gone wrong!';
      default:
        return null;
    }
  }

  render() {
    const { status } = this.state;
    const message = this.getStatusMessage(status);
    return (
      <Container>
        <Title>Add a new post</Title>
        {message && (
          <Alert success={status === 'success'} error={status === 'error'}>
            {message}
          </Alert>
        )}
        <Formik
          onReset={() => {
            this.setState({
              status: ''
            });
          }}
          onSubmit={(values, { resetForm, setSubmitting, setErrors }) => {
            // note: this would normally make an API call
            this.setState(
              {
                status: 'success'
              },
              () => {
                resetForm();
                setSubmitting(false);

                setTimeout(() => {
                  this.setState({
                    status: ''
                  });
                }, 5000);
              }
            );
          }}
          initialValues={{ content: '', title: '' }}
          validationSchema={validationSchema}
          render={({
            handleBlur,
            handleChange,
            handleReset,
            handleSubmit,
            isSubmitting,
            isValid,
            values
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="title">
                Title
                <Input
                  id="title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  required
                />
              </Label>
              <Label htmlFor="content">
                Content
                <StyledTextarea
                  id="content"
                  name="content"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  required
                />
              </Label>
              <ButtonContainer>
                <Button type="reset" onClick={handleReset} destructive>
                  Reset
                </Button>
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  primary
                >
                  Submit
                </Button>
              </ButtonContainer>
            </Form>
          )}
        />
      </Container>
    );
  }
}
