import React, { useState } from 'react';
import { Button, Form, Input, Textarea } from 'react-daisyui';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactForm() {
  type ContactDataError = {
    name: boolean;
    email: boolean;
    message: boolean;
  };

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [contactDataError, setContactDataError] = useState<ContactDataError>({
    name: false,
    email: false,
    message: false,
  });

  const handleContactDataChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const tempContactDataError = { ...contactDataError };
    tempContactDataError.name = false;
    tempContactDataError.email = false;
    tempContactDataError.message = false;
    if (contactData.name === '') {
      tempContactDataError.name = true;
    }
    if (contactData.email === '') {
      tempContactDataError.email = true;
    }
    if (contactData.message === '') {
      tempContactDataError.message = true;
    }
    setContactDataError(tempContactDataError);
    // API call here (axios/rtk query)
  };

  return (
    <div
      id='contact'
      className='flex flex-col md:flex-row gap-3 justify-between my-16'
    >
      <div className='flex flex-col'>
        <div className='font-bold text-2xl mb-2'>Lets work together</div>
        <div className='w-4/5'>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </div>
        <div className='flex gap-2 mt-2'>
          <FaInstagram size={35} />
          <FaLinkedin size={35} />
        </div>
      </div>
      <Form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
        <Input
          className='border-neutral'
          name='name'
          onChange={handleContactDataChange}
          placeholder='Name'
        />
        {contactDataError.name && (
          <div className='text-xs text-error'>No name provided</div>
        )}
        <Input
          className='border-neutral'
          name='email'
          onChange={handleContactDataChange}
          placeholder='Email'
        />
        {contactDataError.email && (
          <div className='text-xs text-error'>No email provided</div>
        )}
        <Textarea
          name='message'
          onChange={handleContactDataChange}
          className='border-neutral'
          placeholder='Type your message here'
        />
        {contactDataError.message && (
          <div className='text-xs text-error'>No message provided</div>
        )}
        <Button type='submit' className='font-normal'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
