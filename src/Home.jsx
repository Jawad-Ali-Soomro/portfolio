import React from "react";

const Home = () => {
  return (
    <div className="main-container flex col">
      <div className="top-container flex col">
        <h1>Studio</h1>
        <h1>devioo</h1>
      </div>
      <div className="about flex col">
        <div className="line flex">
          <h2 data-aos="fade-up">01.</h2>
          <h1 data-aos="fade-up" data-aos-delay="200">
            ELEVATING DIGITAL EXPERIENCES
          </h1>
          <button data-aos="fade-up" data-aos-delay="400" className="flex">
            my services
          </button>
        </div>
        <h1 className="heading" data-aos="fade-right" data-aos-delay="200">
          I craft elegant websites and memorable digital experiences that blend
          timeless style with seamless functionality. <br /> My designs aim for
          simplicity and beauty, alongside smooth interaction and refined visual
          storytelling.
        </h1>
      </div>
      <div className="about highlights flex col">
        <div className="line flex">
          <h2 data-aos="fade-up">02.</h2>
          <h1 data-aos="fade-up" data-aos-delay="200">
            EXplore my projects
          </h1>
          <button className="flex" data-aos="fade-up" data-aos-delay="400">
            my projects
          </button>
        </div>
        <div className="projects flex col">
          <li className="flex" data-aos="fade-right" data-aos-delay="200">
            <span>01.</span>ARTHUB.
          </li>
          <li className="flex" data-aos="fade-right" data-aos-delay="400">
            <span>02.</span>siftp.
          </li>
          <li data-aos="fade-right" data-aos-delay="600" className="flex">
            <span>03.</span>martt.
          </li>
          <li className="flex" data-aos="fade-right" data-aos-delay="800">
            <span>04.</span>bookio.
          </li>
          <li className="flex" data-aos="fade-right" data-aos-delay="1000">
            <span>05.</span>Eastern fulfil...
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
