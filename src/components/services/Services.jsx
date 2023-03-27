import { BiCheck } from "react-icons/bi";

const Services = () => (
  <section id="services" className="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services-container">
      <article className="service">
        <h3 className="service-head">Web Development</h3>
        <ul className="service__list">
          <li>
            <BiCheck />
            <p>High Preformence</p>
          </li>
          <li>
            <BiCheck />
            <p>Responsive Design With All Devices</p>
          </li>
          <li>
            <BiCheck />
            <p>Security</p>
          </li>
          <li>
            <BiCheck />
            <p>Clean Code</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
