import React from 'react'

const BasedElement = (props) => {
  return (
    <article className="portfolio-item">
      <div className="portfolio-image">
        <img
          src={
            props.images[props.index] !== undefined
              ? props.images[props.index]
              : props.defaultImg
          }
          alt={`portfolio-0${props.index}`}
        />
      </div>
      <h3>{props.repoName}</h3>
      <div className="cta">
        <a
          href={`https://github.com/IbrahimBz/${props.repoName}/`}
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={`https://ibrahimbz.github.io/${props.repoName}/`}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default BasedElement