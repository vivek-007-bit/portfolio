
function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left: Introduction */}
        <div className="hero-content">
          <p className="hero-eyebrow">
            Hello, I'm
          </p>

          <h1 className="hero-title">
            Vivek Sharma
          </h1>

          <h2 className="hero-subtitle">
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build web applications that combine
            thoughtful design with reliable functionality.
            I enjoy turning ideas into practical digital
            experiences.
          </p>

          <div className="hero-actions">
            <a href="" className="hero-button hero-button-primary">
              Explore My Work
            </a>

            <a href="" className="hero-button hero-button-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="" aria-label="GitHub">GitHub</a>
            <a href="" aria-label="LinkedIn">LinkedIn</a>
            <a href="" aria-label="Email">Email</a>
          </div>
        </div>

        {/* Right: Profile visual */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="/profile.png"
              alt="Vivek Sharma"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export default Home;
