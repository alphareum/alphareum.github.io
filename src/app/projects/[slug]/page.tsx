import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectDetails } from '@/data/projectDetails';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all project pages
export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Alvin`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Alvin`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-meta-grid">
              <div className="meta-item">
                <p className="meta-label">Duration</p>
                <p className="meta-value">{project.meta.duration}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Client</p>
                <p className="meta-value">{project.meta.client}</p>
              </div>
              <div className="meta-item">
                <p className="meta-label">Field</p>
                <p className="meta-value">{project.meta.field}</p>
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link">
                Visit Channel →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{project.overview.title}</h2>
          <div className="content-grid fade-in">
            <div>
              <p className="content-label">Overview</p>
            </div>
            <div className="content-text">
              {project.overview.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      {project.responsibilities && project.responsibilities.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Key Responsibilities</h2>
            <div className="responsibilities fade-in">
              {project.responsibilities.map((resp) => (
                <div key={resp.number} className="responsibility">
                  <p className="responsibility-number">{resp.number}</p>
                  <h3 className="responsibility-title">{resp.title}</h3>
                  <p className="responsibility-description">{resp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              {slug === 'the-overpost-research' ? 'Research Approaches' : 'Key Features'}
            </h2>
            <div className="features-grid fade-in">
              {project.keyFeatures.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-tags">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="feature-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Key Outcomes</h2>
            <ul className="outcomes-list fade-in">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Back to Home Link */}
      <section className="section">
        <div className="container">
          <Link href="/#projects" className="external-link">
            ← Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
