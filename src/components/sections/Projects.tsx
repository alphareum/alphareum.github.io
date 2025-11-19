import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <div className="projects-scroll">
          <div className="projects-track">
            {projects.map((project) => (
              <Link key={project.id} href={project.link} className="project-card fade-in">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="project-link">View Project →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
