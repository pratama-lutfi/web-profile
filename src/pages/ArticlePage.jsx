import React from 'react';
import PageLayout from '../components/PageLayout';
import Infobox from '../components/Infobox';
import { AnimatedEditIcon } from '../components/AnimatedIcons';

const ArticlePage = () => {
  return (
    <PageLayout>
      <div className="fade-in">
        <h1>Muhammad Lutfi Pratama</h1>

        <Infobox />

        <p>
          <strong>Muhammad Lutfi Pratama</strong> is a <strong>Software Developer</strong> at <strong>PT. Bank Rakyat Indonesia</strong>,
          specializing in web and mobile application development. He is the lead developer of the <strong>Qlola IB Token</strong>
          mobile application and a contributor to major Internet Banking systems. With a background in Cloud Computing
          from Bangkit Academy, he is proficient in <strong>Flutter, ReactJS, and various mobile and web technologies</strong>.
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
          A computer science graduate with a big spirit for learning and high interest in software engineering.
          Currently employed at PT. Bank Rakyat Indonesia as a Software Developer, specializing in web and mobile application.
          I am responsible for developing the Qlola IB Token mobile application (new Qlola Mobile) from scratch for both iOS and
          Android using Flutter, with total downloads 42,916 for iOS, 92,058 for Android, and 252,000 active users by Firebase Analytics.
          Additionally, I contribute to the development of the Internet Banking website, focusing on transfer and payment features.
        </p>
        <p>
          Have almost one year of combined real project or company-based project experience across several types of companies.
          My experience includes hands-on for a development-stage startup project called Deall by SejutaCita mobile app,
          working with software agency called Aksamedia & SCAP-ERP, and graduated from Bangkit Academy 2022 in Cloud Computing learning path.
        </p>
        <p>
          Proficient in JavaScript, TypeScript, Flutter, Kotlin, Swift and ReactJS. As well as versatile enough to switch roles
          and learn new technologies when needed. Additionally, I am highly motivated to contribute to open-source projects.
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
          <li><strong>Mobile:</strong> Flutter, Kotlin, Swift, Android Studio, Xcode</li>
          <li><strong>Web:</strong> ReactJS, JavaScript, TypeScript, Tailwind CSS, Node.js</li>
          <li><strong>Cloud & Tools:</strong> Google Cloud Platform (Cloud Computing), Git, Firebase Analytics</li>
        </ul>

        <h2 id="contact">Contact</h2>
        <p>
          Lutfi can be reached via email at <a href="mailto:pratamalutfi60@gmail.com">pratamalutfi60@gmail.com</a> or through his
          professional social media profiles. He is always open to discussing new opportunities and
          collaborating on innovative projects.
        </p>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;
