import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container">
        <article className="card">
          <h3>Front end</h3>
          <div className="skills">
            <div className="skill">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>PugJS</h4>
              <small className="text-light">intermediate</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>ReactJS</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>Redux</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>ReduxToolkit</h4>
              <small className="text-light">Experiened</small>
            </div>
          </div>
        </article>
        <article className="card">
          <h3>General Skills</h3>
          <div className="skills">
            <div className="skill">
              <BsPatchCheckFill />
              <h4>Git&Github</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>Speed Typing</h4>
              <small className="text-light">Experiened</small>
            </div>
            <div className="skill">
              <BsPatchCheckFill />
              <h4>Problem Solving</h4>
              <small className="text-light">intermediate</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
