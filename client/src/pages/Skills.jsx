
import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Interactive interfaces and dynamic web functionality.",
    color: "#f0db4f",
  },
  {
    name: "React JS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Component-based user interfaces and frontend applications.",
    color: "#61dafb",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Server-side JavaScript and scalable application services.",
    color: "#68a063",
  },
  {
    name: "Express.js",
    image: "https://cdn.simpleicons.org/express/ffffff",
    description: "Backend routing, APIs, and web application middleware.",
    color: "#d5d5e0",
  },
  {
    name: "PHP",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "Dynamic websites and server-side application logic.",
    color: "#777bb4",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Relational databases and structured data management.",
    color: "#00758f",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "Document-oriented databases and flexible data models.",
    color: "#47a248",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Automation, data processing, and general-purpose programming.",
    color: "#3776ab",
  },
];

function Skills() {
  const [rotation, setRotation] = useState({ x: -12, y: 0 });
  const [selected, setSelected] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [lastPointer, setLastPointer] = useState(null);

  const rotationRef = useRef({ x: -12, y: 0 });
  const draggingRef = useRef(false);

  useEffect(() => {
    let frame;
    let previousTime = 0;

    const animate = (time) => {
      if (previousTime && !draggingRef.current) {
        const delta = Math.min(time - previousTime, 40);

        rotationRef.current.y += delta * 0.009;
        setRotation({ ...rotationRef.current });
      }

      previousTime = time;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const handlePointerDown = (event) => {
    draggingRef.current = true;
    setDragging(true);
    setLastPointer({ x: event.clientX, y: event.clientY });
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current || !lastPointer) return;

    const deltaX = event.clientX - lastPointer.x;
    const deltaY = event.clientY - lastPointer.y;

    rotationRef.current = {
      x: Math.max(
        -65,
        Math.min(65, rotationRef.current.x - deltaY * 0.45)
      ),
      y: rotationRef.current.y + deltaX * 0.45,
    };

    setRotation({ ...rotationRef.current });
    setLastPointer({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    setDragging(false);
    setLastPointer(null);
  };

  const radius = 175;
  const selectedSkill = skillsData.find(
    (skill) => skill.name === selected
  );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <header className="skills-heading">
          <div className="skills-kicker">
            <span className="kicker-line" />
            WHAT I WORK WITH
            <span className="kicker-line" />
          </div>

          <h2>
            My digital <span>toolkit.</span>
          </h2>

          <p className="skills-subtitle">
            The technologies I use to transform ideas into
            functional, scalable digital experiences.
          </p>
        </header>

        <div className="skills-showcase">
          <div className="skills-orbit-label orbit-label-top">
            <span className="orbit-status-dot" />
            INTERACTIVE TECHNOLOGIES
          </div>

          <div className="skills-scene">
            <div className="skills-glow" />
            <div className="skills-orbit orbit-outer" />
            <div className="skills-orbit orbit-middle" />
            <div className="skills-orbit orbit-tilted" />

            <div
              className={`skills-sphere ${
                dragging ? "is-dragging" : ""
              }`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onLostPointerCapture={handlePointerUp}
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              {skillsData.map((skill, index) => {
                const angle = Math.acos(
                  1 - (2 * (index + 0.5)) / skillsData.length
                );

                const longitude =
                  index * Math.PI * (3 - Math.sqrt(5));

                const x =
                  radius * Math.sin(angle) * Math.cos(longitude);
                const y = radius * Math.cos(angle);
                const z =
                  radius * Math.sin(angle) * Math.sin(longitude);

                return (
                  <button
                    key={skill.name}
                    type="button"
                    className={`sphere-skill ${
                      selected === skill.name ? "selected" : ""
                    }`}
                    aria-label={`Explore ${skill.name}`}
                    aria-pressed={selected === skill.name}
                    title={skill.name}
                    onPointerDown={(event) => {
                      event.stopPropagation();
                    }}
                    onClick={() => setSelected(skill.name)}
                    style={{
                      "--skill-color": skill.color,
                      transform: `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%)`,
                      zIndex: Math.round(z + radius),
                    }}
                  >
                    <span className="sphere-skill-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="sphere-skill-icon">
                      <img
                        src={skill.image}
                        alt=""
                        draggable="false"
                      />
                    </span>

                    <span className="sphere-skill-name">
                      {skill.name}
                    </span>

                    <span className="sphere-skill-indicator" />
                  </button>
                );
              })}
            </div>

            <div className="skills-center-label">
              <span className="center-orbit" />
              <span className="center-symbol">{"</>"}</span>
              <span className="center-caption">DEVELOP</span>
            </div>
          </div>

          <div className="skills-orbit-label orbit-label-bottom">
            <span className="drag-indicator">
              <span />
              <span />
              <span />
            </span>
            DRAG TO EXPLORE
          </div>
        </div>

        <div className="skills-detail" aria-live="polite">
          <div className="skills-detail-icon">
            {selectedSkill ? (
              <img src={selectedSkill.image} alt="" />
            ) : (
              <span>{"</>"}</span>
            )}
          </div>

          <div className="skills-detail-copy">
            <span className="detail-eyebrow">
              {selectedSkill ? "TECHNOLOGY SELECTED" : "MY STACK"}
            </span>

            <h3>{selectedSkill ? selectedSkill.name : "Built to create"}</h3>

            <p>
              {selectedSkill
                ? selectedSkill.description
                : "Select any logo on the rotating sphere to learn how it fits into my toolkit."}
            </p>
          </div>

          <div className="skills-detail-count">
            <strong>
              {selectedSkill
                ? String(
                    skillsData.findIndex(
                      (skill) => skill.name === selectedSkill.name
                    ) + 1
                  ).padStart(2, "0")
                : "08"}
            </strong>
            <span>/ 08 TECHNOLOGIES</span>
          </div>
        </div>

        <div className="skills-footer-note">
          <span className="footer-note-line" />
          <span>
            FRONTEND <b>·</b> BACKEND <b>·</b> DATABASES
          </span>
          <span className="footer-note-line" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
