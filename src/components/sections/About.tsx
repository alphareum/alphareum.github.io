export default function About() {
  const skills = [
    { id: '01', name: 'Financial Research' },
    { id: '02', name: 'Content Strategy' },
    { id: '03', name: 'Data Analysis' },
    { id: '04', name: 'Technical Writing' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Introduction</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I'm a professional researcher with a detail-oriented and analytical mindset. My experience spans research, content strategy, and workflow optimization across financial markets and technology sectors.
            </p>
            <p>
              My expertise ranges from conducting comprehensive data research to writing professional reports and bridging technical gaps into practical applications. I specialize in making complex financial and technical concepts accessible and actionable.
            </p>
          </div>
          <div className="skills fade-in">
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <p className="skill-label">{skill.id}</p>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
