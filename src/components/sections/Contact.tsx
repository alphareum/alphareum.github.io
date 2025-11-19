export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alvin-wijayanto-227b072a9/',
    },
    {
      name: 'Email',
      url: 'mailto:alvinwijayanto22@gmail.com',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alvinrium/',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Interested in collaboration or have questions about my research? I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <span>{link.name}</span> ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
