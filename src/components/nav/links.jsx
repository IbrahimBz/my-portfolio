import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TbHeartbeat } from "react-icons/tb";
import { BiMessageSquareDots, BiBookBookmark } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveClass } from "../../app/features/active-class/Active-Class";

const NavComponent = () => {
  const activeClass = useSelector((state) => state.activeClass.section);
  const disptch = useDispatch();
  return (
    <>
      <a
        href="/#"
        onClick={() => disptch(setActiveClass("#"))}
        className={activeClass === "#" ? "active" : ""}
        title="Home Page"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => disptch(setActiveClass("#about"))}
        className={activeClass === "#about" ? "active" : ""}
        title="About Me"
      >
        <BsFillPersonFill />
      </a>
      <a
        href="#experience"
        onClick={() => disptch(setActiveClass("#experience"))}
        className={activeClass === "#experience" ? "active" : ""}
        title="Experience"
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => disptch(setActiveClass("#services"))}
        className={activeClass === "#services" ? "active" : ""}
        title="Sevieces"
      >
        <TbHeartbeat />
      </a>
      <a
        href="#contact"
        onClick={() => disptch(setActiveClass("#contact"))}
        className={activeClass === "#contact" ? "active" : ""}
        title="Contact"
      >
        <BiMessageSquareDots />
      </a>
    </>
  );
};

export default NavComponent;
