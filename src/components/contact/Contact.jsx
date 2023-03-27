import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_d7wad04",
      "template_8lkwp3f",
      form.current,
      "au_-yPscHdBPbbXhS"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="option">
            <MdOutlineEmail className="option-icon" />
            <h4>Email</h4>
            <h5>ibrahimbzazeh@gmail.com</h5>
            <a
              href="mailto:ibrahimbzazeh@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="option">
            <RiMessengerLine className="option-icon" />
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/Ibrahim.bz2" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="option">
            <BsWhatsapp className="option-icon" />
            <h4>WhatsApp</h4>
            <h5>+963960968488</h5>
            <a
              href="https://api.whatsapp.com/send?phone=963960968488"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
