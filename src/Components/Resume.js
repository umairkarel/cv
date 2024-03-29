import React from "react";

const Resume = ({ data }) => {
  let education = null;
  let work = null;

  if (data) {
    education = data.education.map((education) => (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span> {education.specialization}
          {education.specialization ? <span>&bull;</span> : null}
          <em className="date">{education.graduated}</em>
        </p>
      </div>
    ));

    work = data.work.map((work) => (
      <div key={work.title}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        {work.description &&
          work.description.map((description, idx) => (
            <p key={idx}>{description}</p>
          ))}
      </div>
    ));
  }

  return (
    <section id="resume">
      <div className="row education" id="edu">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work" id="wrk">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill" id="ski">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <section id="four" className="skills">
            <div className="languages skills show-on-scroll">
              <i className="devicon-python-plain technology"></i>
              <i className="devicon-javascript-plain colored technology"></i>
              <i className="devicon-django-plain colored technology"></i>
              <i className="devicon-flask-plain colored technology"></i>
              <i className="devicon-nodejs-plain-wordmark colored technology"></i>
              <i className="devicon-express-original colored technology"></i>
              <i className="devicon-react-plain-wordmark colored technology"></i>
              <i className="devicon-numpy-plain colored technology"></i>
              <i className="devicon-java-plain-wordmark colored technology"></i>
              <i className="devicon-bootstrap-plain-wordmark technology"></i>
              <i className="devicon-css3-plain-wordmark colored technology"></i>
              <i className="devicon-html5-plain-wordmark colored technology"></i>
              <i className="devicon-docker-plain-wordmark technology"></i>
              <i className="devicon-postgresql-plain-wordmark  technology"></i>
              <i className="devicon-mongodb-plain-wordmark colored technology"></i>
              <i className="devicon-mysql-plain-wordmark colored technology"></i>
              <i className="devicon-redis-plain-wordmark colored technology"></i>
              <i className="devicon-github-original technology"></i>
              <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
              <i className="devicon-nginx-plain-wordmark colored technology"></i>
              <i className="devicon-git-plain-wordmark colored technology"></i>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
