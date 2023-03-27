import React from "react";
import NavComponent from "./links";
import { TargetNavBar } from "./TargetNavBar";

const Nav = () => {
  return (
    <nav>
      <NavComponent />
      <TargetNavBar />
    </nav>
  );
};

export default Nav;
