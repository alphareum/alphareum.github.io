import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline fade-in">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <p className="timeline-date">{exp.date}</p>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
