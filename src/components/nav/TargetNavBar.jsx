import { useDispatch } from "react-redux";
import { setActiveClass } from "../../app/features/active-class/Active-Class";

export const TargetNavBar = () => {
  const disptch = useDispatch();
  const targetNav = (section, lastSection = "") => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= document.getElementById(section).offsetTop - 100) {
        disptch(setActiveClass(`#${section}`));
      } else {
        lastSection !== "" &&
          window.scrollY < document.getElementById(section).offsetTop &&
          disptch(setActiveClass(lastSection));
      }
    });
  };
  window.addEventListener("load", () => {
    targetNav("about", "#");
    targetNav("experience");
    targetNav("services");
    targetNav("contact");
  });
};
