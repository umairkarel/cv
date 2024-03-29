const Footer = ({ data }) => {
  let networks = null;
  if (data) {
    networks = data.social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    ));
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>
          <ul className="copyright">
            <li>&copy; Copyright {new Date().getFullYear()} Umair Karel</li>
            <li>
              Design by{" "}
              <a href="https://github.com/umairkarel">umairkarel</a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
