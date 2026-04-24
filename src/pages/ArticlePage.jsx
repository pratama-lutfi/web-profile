import React from 'react';
import PageLayout from '../components/PageLayout';
import Infobox from '../components/Infobox';
import { AnimatedEditIcon } from '../components/AnimatedIcons';

const ArticlePage = () => {
  return (
    <PageLayout>
      <div className="fade-in">
        <h1>Muhamad Luthfi</h1>
        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>From Wikipedia, the free encyclopedia</p>
        
        <Infobox />

        <p>
          <strong>Muhamad Luthfi</strong> is a professional <strong>Full-Stack Developer</strong> and software engineer 
          specializing in building scalable web applications and high-performance systems. Currently based in 
          Jakarta, Luthfi has contributed to numerous open-source projects and led development for several 
          high-growth technology firms. His primary expertise lies in <strong>React, Node.js, and Cloud Infrastructure</strong>.
        </p>

        <div className="wiki-contents-box">
          <div className="wiki-contents-title">Contents</div>
          <ol style={{ fontSize: '0.85rem' }}>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills & Tools</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
        </div>

        <h2 id="about">About Me</h2>
        <p>
          Luthfi began his career in systems administration before transitioning to full-stack development. 
          His work focuses on the intersection of user experience and performance optimization, particularly 
          in complex enterprise environments. He holds a degree in Computer Science and has spent the last 
          six years refining a development philosophy rooted in modularity and information clarity.
        </p>
        <div style={{ marginBottom: '2rem' }}>
          <button style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '0.5rem 1rem', 
            backgroundColor: '#f8f9fa', 
            border: '1px solid #a2a9b1',
            cursor: 'pointer'
          }}>
            <AnimatedEditIcon /> View Curriculum Vitae (PDF)
          </button>
        </div>

        <h2 id="projects">Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ border: '1px solid #a2a9b1', padding: '0.5rem', backgroundColor: '#f8f9fa' }}>
              <div style={{ height: '150px', backgroundColor: '#eaecf0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', border: '1px solid #c8ccd1' }}>
                <span style={{ color: '#54595d' }}>Project Screenshot {i}</span>
              </div>
              <div style={{ fontWeight: 'bold' }}>Project Title {i}</div>
              <div style={{ fontSize: '0.8rem', color: '#54595d' }}>A brief description of project {i} and the technologies used.</div>
            </div>
          ))}
        </div>

        <h2 id="skills">Skills & Tools</h2>
        <ul>
          <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Framer Motion</li>
          <li><strong>Backend:</strong> Node.js, Express, PostgreSQL, MongoDB, Redis</li>
          <li><strong>Tools:</strong> Docker, Kubernetes, AWS, Git, CI/CD</li>
        </ul>

        <h2 id="contact">Contact</h2>
        <p>
          Luthfi can be reached via email at <a href="mailto:luthfi@dev.com">luthfi@dev.com</a> or through his 
          professional social media profiles. He is always open to discussing new opportunities and 
          collaborating on innovative projects.
        </p>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
