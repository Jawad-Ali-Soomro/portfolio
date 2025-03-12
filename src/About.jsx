import React from "react";

const About = () => {
  return (
    <div className="about-me flex col">
      <h1 className="flex">
        about <span>studio devioo</span>
      </h1>
      <div className="container-about flex">
        <div className="left-container flex">
          <h3>
            Hi, I'm <span>Jawad Ali</span>, a passionate MERN Stack Developer
            with a <span>strong</span> foundation in full-stack{" "}
            <span>web development</span>. I specialize in building scalable,
            high-performance web applications using{" "}
            <span>modern technologies</span>.
            <br />I hold a Bachelor’s degree in <span>Computer Science</span>,
            where I developed expertise in <span>software development</span>,
            data structures, and <span>system security</span>. My final year
            project focused on <span>creating a digital art marketplace</span>{" "}
            with advanced features, including real-time bidding and secure
            transactions.
          </h3>
        </div>
        <div className="right-container flex col">
          <h2 style={{ fontSize: "3rem" }}>experience</h2>
          <div className="main-exp flex col">
            <div className="card-exp flex col">
              <h2>PITB INCUBATION WING</h2>
              <h3>NOV 2023 - APR 2024</h3>
              <h3>internship</h3>
              <p>
                During my internship, I worked as a Full-Stack Web Developer,
                where I contributed to website development, maintenance, and
                CI/CD implementation. My role involved optimizing performance,
                ensuring seamless user experiences, and automating deployment
                processes.
              </p>
            </div>
            <div className="card-exp flex col">
              <h2>SIFTP</h2>
              <h3>AUG 2024 - FEB 2025</h3>
              <h3>software developer</h3>
              <p>
                At SIFTP, I worked as a Software Developer and also held an
                equity partnership of 30%, contributing to both the technical
                and strategic growth of the company. My role involved developing
                and maintaining web applications, ensuring seamless
                functionality, and implementing CI/CD pipelines for efficient
                deployment.
              </p>
            </div>
            <div className="card-exp flex col">
              <h2>iba sukkur</h2>
              <h3>feb 2025 - now</h3>
              <h3>associate software developer</h3>
              <p>
                At IBA, I worked as a Software Developer, contributing to a
                national project focused on building scalable and efficient
                software solutions. My role involved website development, system
                maintenance, and CI/CD pipeline integration to enhance
                deployment efficiency and ensure smooth project execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
