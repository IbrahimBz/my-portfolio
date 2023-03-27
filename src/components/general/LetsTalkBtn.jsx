import React from "react";
import { useDispatch } from "react-redux";
import { setActiveClass } from "../../app/features/active-class/Active-Class";

const LetsTalkBtn = () => {
  const disptch = useDispatch();
  return (
    <a
      href="#contact"
      className="btn primary"
      onClick={() => {
        disptch(setActiveClass("#contact"));
      }}
    >
      Let`s Talk
    </a>
  );
};

export default LetsTalkBtn;
