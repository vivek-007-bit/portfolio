
import { useRef, useState, useEffect } from "react";
const sketches = [
  {
    id: 1,
    image: "/sketches/sketch-1.jpg",
    title: "Portrait Study",
    type: "PENCIL ART",
  },
  {
    id: 2,
    image: "/sketches/sketch-2.jpg",
    title: "Expressions",
    type: "FIGURE STUDY",
  },
  {
    id: 3,
    image: "/sketches/sketch-3.jpg",
    title: "Fine Details",
    type: "GRAPHITE",
  },
  {
    id: 4,
    image: "/sketches/sketch-4.jpg",
    title: "Human Form",
    type: "PORTRAIT ART",
  },
  {
    id: 5,
    image: "/sketches/sketch-5.jpg",
    title: "Lines & Shadows",
    type: "PENCIL ART",
  },
  {
    id: 6,
    image: "/sketches/sketch-6.jpg",
    title: "Visual Notes",
    type: "SKETCH STUDY",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const total = sketches.length;

  const goTo = (index) => {
    setActiveIndex((index + total) % total);
  };

  const next = () => goTo(activeIndex + 1);
  const previous = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const getOffset = (index) => {
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-atmosphere">
        <span className="gallery-orbit orbit-one" />
        <span className="gallery-orbit orbit-two" />
        <span className="gallery-glow" />
      </div>

      <div className="gallery-container">
        <header className="gallery-heading">
          <span className="gallery-eyebrow">
            <span className="gallery-eyebrow-line" />
            THE SKETCHBOOK
          </span>

          <h2>
            My <span>Sketches.</span>
          </h2>

          <p>
            A collection of ideas, captured one line at a time.
          </p>
        </header>

        <div
          className="gallery-stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
            setIsPaused(true);
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;

            const difference =
              event.changedTouches[0].clientX - touchStartX.current;

            if (Math.abs(difference) > 45) {
              difference < 0 ? next() : previous();
            }

            touchStartX.current = null;
            setIsPaused(false);
          }}
        >
          <div className="gallery-stage-grid" />

          {sketches.map((sketch, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;

            return (
              <button
                type="button"
                key={sketch.id}
                className={`sketch-slide ${
                  isActive ? "is-active" : ""
                } ${Math.abs(offset) > 1 ? "is-hidden" : ""}`}
                style={{
                  "--slide-offset": offset,
                  "--slide-depth": Math.abs(offset),
                }}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
                aria-label={`${
                  isActive ? "Currently viewing" : "View"
                } ${sketch.title}`}
                aria-current={isActive ? "true" : undefined}
                tabIndex={Math.abs(offset) > 1 ? -1 : 0}
              >
                <span className="sketch-frame">
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    draggable="false"
                  />

                  <span className="sketch-frame-shine" />
                  <span className="sketch-frame-corner top-left" />
                  <span className="sketch-frame-corner top-right" />
                  <span className="sketch-frame-corner bottom-left" />
                  <span className="sketch-frame-corner bottom-right" />
                </span>
              </button>
            );
          })}

          <button
            className="gallery-nav gallery-prev"
            type="button"
            onClick={previous}
            aria-label="Previous sketch"
          >
            <span>←</span>
          </button>

          <button
            className="gallery-nav gallery-next"
            type="button"
            onClick={next}
            aria-label="Next sketch"
          >
            <span>→</span>
          </button>
        </div>

        <div className="gallery-caption" aria-live="polite">
          <div className="gallery-caption-info">
            <span className="gallery-art-type">
              {sketches[activeIndex].type}
            </span>
            <h3>{sketches[activeIndex].title}</h3>
          </div>

          <div className="gallery-pagination">
            <span className="gallery-current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="gallery-progress-track">
              <span
                className="gallery-progress-fill"
                style={{
                  width: `${((activeIndex + 1) / total) * 100}%`,
                }}
              />
            </div>

            <span className="gallery-total">
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="gallery-dots">
          {sketches.map((sketch, index) => (
            <button
              key={sketch.id}
              type="button"
              className={`gallery-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to ${sketch.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
