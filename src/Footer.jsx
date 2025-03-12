const Footer = () => {
  return (
    <div className="footer flex">
      <div className="left-about flex">
        <p>
          {" "}
          I help brands and businesses dive deep beyond the surface. It’s the
          unexplored points of view and the right questions that move our
          approach. With a broad perspective on each project, I uncover new
          angles and authentic solutions. Our process is fueled by open
          communication, creative force, and the pursuit of impactful work that
          resonate with our clients.
        </p>
      </div>
      <div className="services flex col">
        <h2>MY SERVICES</h2>
        <ul className="flex col">
          <li>WEB DESIGN</li>
          <li>WEB DEVELOPMENT</li>
          <li>WORDPRESS</li>
          <li>GITHUB</li>
          <li>WEB HOSTING</li>
        </ul>
      </div>
      <div className="services links-main flex col">
        <h2>connect with me</h2>
        <ul className="flex col">
          <li>
            {" "}
            <a href="/">facebook</a>
          </li>
          <li>
            {" "}
            <a href="/">dev.to</a>
          </li>
          <li>
            {" "}
            <a href="/">instagram</a>
          </li>
          <li>
            {" "}
            <a href="/">linkedin</a>
          </li>
          <li>
            {" "}
            <a href="/">github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
