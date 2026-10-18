
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              VS<span>.</span>
            </a>

            <h2>
              Vivek Sharma
              <span className="footer-dot">.</span>
            </h2>

            <p className="footer-description">
              Data Science student and developer building thoughtful
              digital experiences through technology, design, and data.
            </p>

            <div className="footer-status">
              <span className="status-indicator" />
              Open to opportunities
            </div>
          </div>

          <div className="footer-navigation">
            <h3>Navigation</h3>

            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect">
            <h3>Let's Connect</h3>

            <p>
              Have a project, opportunity, or idea in mind?
              I'd be happy to hear from you.
            </p>

            <a
              href="#contact"
              className="footer-contact-link"
            >
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>

            <div className="footer-socials">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/your-username/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} Vivek Sharma. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>

          <p className="footer-made">
            Designed with purpose<span>.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
