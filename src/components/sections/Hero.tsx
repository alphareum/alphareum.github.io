'use client';

import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const displayedText = useTypewriter({
    words: ['Research', 'Analyze', 'Create'],
    typingSpeed: 120,
    deletingSpeed: 60,
    pauseAfterTyping: 2000,
    pauseAfterDeleting: 500,
  });

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">Professional Researcher</p>
        <h1 className="hero-title">
          I'm <span>Alvin</span>.<br />
          {displayedText}<span className="typewriter-cursor">|</span>
        </h1>
        <p className="hero-description">
          Building analytical solutions that bridge technical gaps into practical applications for financial markets and technology.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
