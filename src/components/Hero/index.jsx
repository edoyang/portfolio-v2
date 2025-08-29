const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h4>Fullstack Web Developer</h4>

      <h1>Building Scalable & Engaging Web Experiences</h1>

      <p>
        Hey there! I'm Edoardo,a Full Stack Developer who loves building cool
        and scalable web experiences. From crafting beautiful frontends to
        powering robust backends, I bring ideas to life with clean code and
        great design. Let's create something amazing together!
      </p>

      <div className="extras">
        <button className="btn-primary">Download My CV</button>
      </div>

      <div className="infos">
        <div className="info">
          <span>2+</span>
          <p>Years of Experience</p>
        </div>

        <div className="info">
          <span>16+</span>
          <p>Projects Completed</p>
        </div>

        <div className="info">
          <span>2+</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
