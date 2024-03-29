import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-me", ...formData }),
    })
      .then(() => {
        alert("Your message was successfully sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (data) {
    var name = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var message = data.contactmessage;
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="message"
                  value={formData.message}
                  required
                  onChange={handleChange}></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
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
        </aside>
      </div>
    </section>
  );
};

export default Contact;
