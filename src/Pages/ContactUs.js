import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vpjl3pr','template_aeimxoc', form.current, 'PQhWAhDUJ6NSY3UwV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
    <div className='ContatcUs-background'>
    <h4 className='contactUs-Title'> Need more information ?
    <br /> Contact us here, and we will get back to you as soon as possible </h4>

    <form ref={form} onSubmit={sendEmail} className='form-Container'>
      {/* <label>Name</label> */}
      <input type="text" placeholder='Name' name="name" />
      {/* <label>Email</label> */}
      <input type="email" placeholder='Email' name="email" />
      {/* <label>Subject</label> */}
      <input type="text" placeholder='Subject' name="subject" />
      {/* <label>Message</label>  */}
      <textarea name="message" placeholder='Message' rows={2} className='message-Container' />
      <button type="submit" value="Submit Message" className='btn-form'> Send </button>
    </form>
    </div>
    <Footer />

    </>
  );
};
