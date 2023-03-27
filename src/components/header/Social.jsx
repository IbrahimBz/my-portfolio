import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
const Social = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com/in/ibrahimbz" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="https://gitgub.com/IbrahimBz" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a
      href="https://facebook.com/facebook.com/Ibrahim.bzi"
      target="_blank"
      rel="noreferrer"
    >
      <BsFacebook />
    </a>
    <a href="https://instgram.com/ib1bz" target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default Social;
