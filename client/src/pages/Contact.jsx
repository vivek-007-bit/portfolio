
import { useState } from "react";
import { sendContactMessage } from "../services/api";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const result = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || "Portfolio Contact",
        message: formData.message.trim(),
      });

      setFormData(initialFormData);

      setStatus({
        type: "success",
        message: result.message || "Your message has been sent successfully!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background" aria-hidden="true">
        <span className="contact-background-glow contact-glow-left" />
        <span className="contact-background-glow contact-glow-right" />
        <span className="contact-background-grid" />
      </div>

      <div className="contact-container">
        <header className="contact-header">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-dot" />
            GET IN TOUCH
          </span>

          <h2 className="contact-title">
            Let's start a <span>conversation.</span>
          </h2>

          <p className="contact-subtitle">
            Have a project in mind, an opportunity to discuss, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          <aside className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-section-label">CONTACT DETAILS</span>
              <h3>Let's connect.</h3>
              <p>
                I'm always interested in working on meaningful projects,
                exploring ideas, and connecting with people in tech.
              </p>
            </div>

            <div className="contact-methods">
              <a
                className="contact-method"
                href="mailto:your-email@example.com"
              >
                <span className="contact-method-icon" aria-hidden="true">
                  @
                </span>

                <span className="contact-method-text">
                  <span className="contact-method-label">EMAIL ME</span>
                  <span className="contact-method-value">
                    your-email@example.com
                  </span>
                </span>

                <span className="contact-method-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="contact-method"
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-icon" aria-hidden="true">
                  GH
                </span>

                <span className="contact-method-text">
                  <span className="contact-method-label">GITHUB</span>
                  <span className="contact-method-value">
                    Explore my repositories
                  </span>
                </span>

                <span className="contact-method-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="contact-method"
                href="https://www.linkedin.com/in/your-username/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-icon" aria-hidden="true">
                  in
                </span>

                <span className="contact-method-text">
                  <span className="contact-method-label">LINKEDIN</span>
                  <span className="contact-method-value">
                    Connect professionally
                  </span>
                </span>

                <span className="contact-method-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div className="contact-availability">
              <span className="contact-availability-dot" />
              <span>Open to opportunities and collaboration</span>
            </div>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-section-label">SEND A MESSAGE</span>
              <h3>Tell me about it.</h3>
              <p>Fill in the details below to get the conversation started.</p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate={false}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  minLength={3}
                  maxLength={120}
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={5000}
                  required
                  disabled={isSubmitting}
                />
                <span className="contact-character-count">
                  {formData.message.length}/5000 characters
                </span>
              </div>

              <button
                className="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <span aria-hidden="true">
                  {isSubmitting ? "…" : "↗"}
                </span>
              </button>

              <p className="contact-form-note">
                Your message will be sent securely through the website's email
                service. Your email address will only be used to respond.
              </p>

              {status.message && (
                <p
                  className={`contact-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <footer className="contact-bottom">
          <span className="contact-bottom-line" />
          <p>GOOD CONVERSATIONS START HERE.</p>
          <span className="contact-bottom-line" />
        </footer>
      </div>
    </section>
  );
}
