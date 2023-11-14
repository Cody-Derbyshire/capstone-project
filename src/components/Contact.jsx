import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../css/Contact.css';
import TopBanner from './TopBanner';

const Contact = () => {
  function ContactForm() {
    const [state, handleSubmit] = useForm('mnqkyjvk');
    if (state.succeeded) {
      return <h1>we'll be in touch!</h1>;
    }
    return (
      <>
        <form className='form-wrapper' onSubmit={handleSubmit}>
          <h1>let's get in touch.</h1>
          <div className='form-group'>
            <label className='form-label' htmlFor='name'>
              full name
            </label>
            <input
              className='form-input'
              id='name'
              type='name'
              name='name'
              required={true}
              autoComplete='true'
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='email'>
              email address
            </label>
            <input
              className='form-input'
              id='email'
              type='email'
              name='email'
              required={true}
              autoComplete='true'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='message'>
              message
            </label>
            <textarea
              className='form-input text-area'
              id='message'
              name='message'
              required={true}
              autoComplete='true'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button
            className='form-btn'
            type='submit'
            disabled={state.submitting}
          >
            submit
          </button>
        </form>
      </>
    );
  }
  return (
    <>
      <TopBanner content={{ title: 'contact' }} />
      <div className='contact-wrapper'>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
