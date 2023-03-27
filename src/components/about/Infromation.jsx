import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";
const Infromation = () => (
    <div className="acticles-container">
      <article>
        <AiOutlineFileDone />
        <h5>Experience</h5>
        <small>1+ Years Working</small>
      </article>
      <article>
        <FaPeopleArrows />
        <h5>Cleinets</h5>
        <small>30+ Worldwide</small>
      </article>
      <article>
        <IoCodeWorkingSharp />
        <h5>Progects</h5>
        <small>10+ completed</small>
      </article>
    </div>
    
);

export default Infromation;
