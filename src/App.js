import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import resumeData from "./assets/resumeData.json";

import "./App.css";

const App = () => {
  const [resumeDataState] = useState(resumeData);

  return (
    <div className="App">
      <Header data={resumeDataState.main} />
      <About data={resumeDataState.main} />
      <Resume data={resumeDataState.resume} />
      <Portfolio data={resumeDataState.portfolio} />
      <Contact data={resumeDataState.main} />
      <Footer data={resumeDataState.main} />
    </div>
  );
};

export default App;
