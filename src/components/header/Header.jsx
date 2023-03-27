import React from "react";
import CTA from "./CTA";
import Social from "./Social";
import Picture from "./Picture";

export const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I`m</h5>
        <h1 data-name="Ibrahim Bzazeh">Ibrahim Bzazeh</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <div className="me-container">
          <Social />
          <Picture />
          <a className="scrool-down" href="#contact">
            Scrool Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
