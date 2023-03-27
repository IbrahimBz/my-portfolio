import axios from "axios";
import React, { useEffect, useState } from "react";
import IMG1 from "../../assets/portfolio-01.png";
import IMG2 from "../../assets/portfolio-02.png";
import IMG3 from "../../assets/portfolio-03.png";
import IMG4 from "../../assets/portfolio-04.png";
import defaultIMG from "../../assets/default-portfolio.webp";
import BasedElement from "./BasedElement";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const images = [IMG1, IMG2, IMG3, IMG4];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.github.com/users/IbrahimBZ/repos"
      );
      setData(result.data);
    };
    fetchData();
  }, [data]);

  const articles = data.map((e, i) => {
    return (
      <BasedElement
        key={e.id}
        repoName={e.name}
        images={images}
        index={i}
        defaultImg={defaultIMG}
      />
    );
  });

  return (
    <section id="portfolio" className="portfolio">
      <h5>My Last Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">{articles}</div>
    </section>
  );
};

export default Portfolio;
