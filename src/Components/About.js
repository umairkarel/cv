import React from "react";
import profilepic from "../images/thumbs/profilepic.png";
import resume from "../assets/resume.pdf";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var about = data.about;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <div dangerouslySetInnerHTML={{ __html: about }}></div>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a
                    href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>
                    {email}
                  </a>
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                {console.log(resume)}
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
