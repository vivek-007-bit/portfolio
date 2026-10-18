function Education() {
  const educationData = [
    {
      id: 1,
      level: "Secondary Education",
      qualification: "Class X",
      institution: "Your School Name",
      duration: "2019 – 2020",
      scoreLabel: "Percentage",
      score: "85%",
      scope: [
        "Studied Mathematics, Science, and Social Science.",
        "Developed foundational analytical and problem-solving skills.",
        "Built a strong understanding of core academic concepts.",
      ],
    },
    {
      id: 2,
      level: "Higher Secondary Education",
      qualification: "Class XII — Science",
      institution: "Your School / Junior College",
      duration: "2021 – 2022",
      scoreLabel: "Percentage",
      score: "83.6%",
      scope: [
        "Focused on Mathematics, Computer Science, and core science subjects.",
        "Strengthened logical reasoning and quantitative skills.",
        "Developed an interest in programming and technology.",
      ],
    },
    {
      id: 3,
      level: "Undergraduate Degree",
      qualification: "B.Sc. Data Science",
      institution: "Your College Name",
      duration: "2024 – 2028",
      scoreLabel: "Current CGPA",
      score: "8.31 / 10",
      scope: [
        "Studying statistics, mathematics, data analysis, and machine learning.",
        "Learning programming, database management, and software development.",
        "Applying concepts through full-stack projects and practical assignments.",
      ],
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Section heading */}
        <div className="education-heading">
          <p className="education-eyebrow">MY ACADEMIC JOURNEY</p>
          <h2>
            My <span>Education</span>
          </h2>
          <p className="education-subtitle">
            The milestones that have shaped my knowledge,
            skills, and interest in technology.
          </p>
        </div>

        {/* Education timeline */}
        <div className="education-timeline">
          {educationData.map((item) => (
            <article className="education-item" key={item.id}>
              <div className="education-marker">
                <span>{String(item.id).padStart(2, "0")}</span>
              </div>

              <div className="education-card">
                <div className="education-card-top">
                  <div>
                    <p className="education-level">{item.level}</p>
                    <h3>{item.qualification}</h3>
                    <p className="education-institution">
                      {item.institution}
                    </p>
                  </div>

                  <span className="education-duration">
                    {item.duration}
                  </span>
                </div>

                <div className="education-score">
                  <span>{item.scoreLabel}</span>
                  <strong>{item.score}</strong>
                </div>

                <div className="education-scope">
                  <h4>Scope of Study</h4>
                  <ul>
                    {item.scope.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;