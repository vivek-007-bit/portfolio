function About() {
    return (
      <section className="about-section" id="about">
        <div className="about-container">
          {/* Section heading */}
          <div className="about-heading">
            <h2>
              About <span>Me</span>
            </h2>
          </div>
  
          {/* Image and description */}
          <div className="about-content">
            <div className="about-image-column">
              <div className="about-image-wrapper">
                <img
                  src="/profile.png"
                  alt="Portrait of Vivek Sharma"
                  className="about-image"
                />
              </div>
            </div>
  
            <div className="about-text-column">
              <p>
                Hi, I'm Vivek Sharma, a Data Science student
                with a strong interest in software development,
                modern web technologies, and practical
                problem-solving. I enjoy understanding how
                technology works and using it to create
                applications that are useful, intuitive,
                and reliable.
              </p>
  
              <p>
                My journey combines academic learning with
                hands-on development. I have been exploring
                frontend development with React, backend
                development with Node.js and Express, and
                database technologies for building full-stack
                applications. Working on personal and
                practical projects has helped me understand
                how individual components come together to
                form a complete product.
              </p>
  
              {/* Download Resume */}
              <a
                href="/resume.pdf"
                className="about-resume-button"
                download
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;