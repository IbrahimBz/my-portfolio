import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="logo">
        IBRAHIM
      </a>
      <ul className="sections-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="socials-links">
        <li>
          <a
            href="https://www.facebook.com/Ibrahim.bzi/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/ib1bz"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ibrahimbz"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <small>&copy; Made with Ibrahim</small>
      </div>
    </footer>
  );
};

export default Footer;
