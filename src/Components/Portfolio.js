import project1 from "../images/thumbs/project1.gif";
import project2 from "../images/thumbs/project2.gif";
import project5 from "../images/thumbs/project5.gif";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row projects">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf">
            <div className="article-wrapper">
              <article className="col-12 col-12-xsmall work-item">
                <a
                  href="https://github.com/umairkarel/Sorting-Visualizer"
                  className="image fit thumb"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={project1} alt="Sorting-Visualizer" />
                </a>
                <div className="art-description">
                  <div className="text-wrapper">
                    <h3>Sorting Algorithms Visualizer</h3>
                    <p>
                      A application to visualize various sorting algorithm's.{" "}
                      <br />
                      "Unlock the magic of sorting algorithms visually -
                      enhancing understanding one step at a time!"
                    </p>
                  </div>
                  <ul className="actions">
                    <div className="actions-wrapper">
                      <li>
                        <a
                          href="https://github.com/umairkarel/Sorting-Visualizer"
                          className="button project-button brands"
                          target="_blank"
                          rel="noopener noreferrer">
                          <i className="fa fa-github icon"></i>View Source
                        </a>
                      </li>
                    </div>
                    <div className="languages">
                      <i className="devicon-python-plain technology"></i>
                    </div>
                  </ul>
                </div>
              </article>
            </div>
            <div className="article-wrapper">
              <article className="col-12 col-12-xsmall work-item">
                <a
                  href="https://github.com/umairkarel/GreenMile"
                  className="image fit thumb"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={project2} alt="green-mile" />
                </a>
                <div className="art-description">
                  <div className="text-wrapper">
                    <h3>Hand Written Digit Recognizer</h3>
                    <p>
                      Handwritten Digit recognizer implemented from complete
                      scratch using self-coded neural network.
                    </p>
                  </div>
                  <ul className="actions">
                    <div className="actions-wrapper">
                      <li>
                        <a
                          href="https://github.com/umairkarel/Machine-Learning/tree/master/Projects/Hand-Written-Digit-Recognizer"
                          className="button project-button brands"
                          target="_blank"
                          rel="noopener noreferrer">
                          <i className="fa fa-github icon"></i>View Source
                        </a>
                      </li>
                    </div>
                    <div className="languages">
                      <i className="devicon-python-plain technology"></i>
                      <i className="devicon-numpy-plain technology"></i>
                    </div>
                  </ul>
                </div>
              </article>
            </div>
            <div className="article-wrapper">
              <article className="col-12 col-12-xsmall work-item">
                <a
                  href="https://github.com/umairkarel/Smart-Water"
                  className="image fit thumb"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={project5} alt="smart-water" />
                </a>
                <div className="art-description">
                  <div className="text-wrapper">
                    <h3>8 Puzzle Solver</h3>
                    <p>
                      8 Puzzle game along with the solver feature that uses 𝗔*
                      𝘀𝗲𝗮𝗿𝗰𝗵 𝗮𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺 to solve any(valid) instance of the game.
                      <br />
                      It shows step by step solution to the user.
                    </p>
                  </div>
                  <ul className="actions">
                    <div className="actions-wrapper">
                      <li>
                        <a
                          href="https://github.com/umairkarel/8-Puzzle-Solver"
                          className="button project-button brands"
                          target="_blank"
                          rel="noopener noreferrer">
                          <i className="fa fa-github icon"></i>View Source
                        </a>
                      </li>
                    </div>
                    <div className="languages">
                      <i className="devicon-python-plain technology"></i>
                    </div>
                  </ul>
                </div>
              </article>
            </div>
            <ul className="actions">
              <li className="wide-button">
                <a
                  href="https://github.com/umairkarel"
                  className="button portfolio-button"
                  target="_blank"
                  rel="noopener noreferrer">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
