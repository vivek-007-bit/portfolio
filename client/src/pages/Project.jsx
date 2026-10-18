const projects = [
  {
    number: "01",
    name: "HR Platform",
    category: "Full-Stack Web Application",
    description:
      "A centralized HR platform built to simplify recruitment workflows, job listings, and application management.",
    image: "/projects/hr-platform.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "",
    github: "",
  },
  {
    number: "02",
    name: "Art Portfolio",
    category: "Creative Portfolio & CMS",
    description:
      "A portfolio website for showcasing artwork, sketchbooks, and motion art, supported by an admin-managed content system.",
    image: "/projects/art-portfolio.png",
    tech: ["React", "PHP", "MySQL", "Cloudinary"],
    live: "",
    github: "",
  },
  {
    number: "03",
    name: "Chasma Store",
    category: "E-Commerce",
    description:
      "An online optical store with frame and lens selections, customer accounts, checkout workflows, and WhatsApp order communication.",
    image: "/projects/chasma-store.png",
    tech: ["React", "PHP", "MySQL", "Cloudinary"],
    live: "https://chasma-store-client.onrender.com",
    github: "",
  },
  {
    number: "04",
    name: "Interior Design Portfolio",
    category: "Portfolio & Content Management",
    description:
      "A modern interior design website featuring project galleries, visual storytelling, and an admin panel for managing content.",
    image: "/projects/interior-design.png",
    tech: ["React", "PHP", "MySQL", "Cloudinary"],
    live: "https://interior-design-client.onrender.com",
    github: "",
  },
  {
    number: "05",
    name: "Insta V2",
    category: "Social Media Application",
    description:
      "A social platform with account management, profile editing, image posts, and planned feed, story, and user interaction features.",
    image: "/projects/insta-v2.png",
    tech: ["Flask", "FastAPI", "MongoDB", "Cloudinary"],
    live: "",
    github: "",
  },
  {
    number: "06",
    name: "College Event Calendar",
    category: "Event Management",
    description:
      "A role-based college event platform for discovering events, managing schedules, and coordinating activities across departments.",
    image: "/projects/college-events.png",
    tech: ["React", "Express", "PostgreSQL"],
    live: "",
    github: "",
  },
  {
    number: "07",
    name: "Professional Content Checker",
    category: "Content Moderation",
    description:
      "A moderation backend designed to inspect text, images, and video for potentially inappropriate or unsuitable content.",
    image: "/projects/content-checker.png",
    tech: ["Node.js", "Express", "NSFWJS", "FFmpeg"],
    live: "",
    github: "",
  },
  {
    number: "08",
    name: "Job & Social Platform",
    category: "Professional Networking",
    description:
      "A combined job portal and social experience connecting professional opportunities with content sharing and engagement.",
    image: "/projects/job-social.png",
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    live: "",
    github: "",
  },
  {
    number: "09",
    name: "Data Science Project",
    category: "Data Science & Analytics",
    description:
      "A data science project showcasing data preparation, exploratory analysis, machine learning, and visual insights.",
    image: "/projects/data-science.png",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    live: "",
    github: "",
  },
];

function ProjectLink({ href, children }) {
  const isAvailable = Boolean(href);

  if (!isAvailable) {
    return (
      <span
        className="project-action project-action-disabled"
        aria-disabled="true"
        title={`${children} link not added yet`}
      >
        {children}
        <span aria-hidden="true">↗</span>
      </span>
    );
  }

  return (
    <a
      className="project-action"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-background" aria-hidden="true">
        <span className="projects-background-glow projects-glow-left" />
        <span className="projects-background-glow projects-glow-right" />
        <span className="projects-background-grid" />
      </div>

      <div className="projects-container">
        <header className="projects-header">
          <span className="projects-eyebrow">
            <span className="projects-eyebrow-dot" />
            MY WORK
          </span>

          <h2 className="projects-title">
            Projects & <span>Experiments</span>
          </h2>

          <p className="projects-subtitle">
            A selection of applications and ideas I've brought to life through
            design, development, and problem-solving.
          </p>

          <div className="projects-header-meta">
            <span>SELECTED PROJECTS</span>
            <span className="projects-header-line" />
            <span>09 PROJECTS</span>
          </div>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="project-image-shade" />

                <span className="project-card-number">
                  {project.number}
                </span>

                <span className="project-card-category">
                  {project.category}
                </span>

                <span className="project-card-image-link" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.name}</h3>

                <p className="project-card-description">
                  {project.description}
                </p>

                <div className="project-card-tech">
                  {project.tech.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card-divider" />

                <div className="project-card-actions">
                  <ProjectLink href={project.live}>Live Demo</ProjectLink>
                  <ProjectLink href={project.github}>GitHub</ProjectLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="projects-bottom">
          <span className="projects-bottom-line" />
          <p>MORE IDEAS. MORE BUILDING. ALWAYS LEARNING.</p>
          <span className="projects-bottom-line" />
        </footer>
      </div>
    </section>
  );
}
