import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Infobox from '../components/Infobox';
import { AnimatedEditIcon } from '../components/AnimatedIcons';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/projects';

const ArticlePage = () => {
  const { t, language } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageLayout>
      <div className="fade-in">
        <h1>{t('name')}</h1>

        <Infobox />

        <p>
          <strong>{t('name')}</strong> {t('articleIntro')}
        </p>

        <div className="wiki-contents-box">
          <div className="wiki-contents-title">{t('contents')}</div>
          <ol style={{ fontSize: '0.85rem' }}>
            <li><a href="#about">{t('aboutMe')}</a></li>
            <li><a href="#projects">{t('projects')}</a></li>
            <li><a href="#skills">{t('skills')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
          </ol>
        </div>

        <h2 id="about">{t('aboutMe')}</h2>
        <p>
          {language === 'en' ? (
            <>
              A computer science graduate with a big spirit for learning and high interest in software engineering.
              Currently employed at PT. Bank Rakyat Indonesia as a Software Developer, specializing in web and mobile application.
              I am responsible for developing the Qlola IB Token mobile application (Qlola Mobile by BRI) from scratch for both iOS and
              Android using Flutter, with total downloads <b>42,916</b> for iOS, <b>92,058</b> for Android, and <b>252,000</b> active users by Firebase Analytics.
              Additionally, I contribute to the development of the Internet Banking website, focusing on transfer and payment features.
            </>
          ) : (
            <>
              Seorang lulusan ilmu komputer dengan semangat belajar yang besar dan minat yang tinggi dalam rekayasa perangkat lunak.
              Saat ini bekerja di PT. Bank Rakyat Indonesia sebagai Software Developer, yang mengkhususkan diri dalam aplikasi web dan seluler.
              Saya bertanggung jawab untuk mengembangkan aplikasi seluler Qlola IB Token (Qlola Mobile by BRI) dari awal untuk iOS dan
              Android menggunakan Flutter, dengan total unduhan <b>42.916</b> untuk iOS, <b>92.058</b> untuk Android, dan <b>252.000</b> pengguna aktif berdasarkan Firebase Analytics.
              Selain itu, saya berkontribusi dalam pengembangan situs web Internet Banking, dengan fokus pada fitur transfer dan pembayaran.
            </>
          )}
        </p>
        <p>
          {language === 'en' ? (
            <>
              Have almost one year of combined real project or company-based project experience across several types of companies.
              My experience includes hands-on for a development-stage startup project called <b>Deall by SejutaCita</b> mobile app,
              working with software agency called <b>Aksamedia</b> & <b>SCAP-ERP</b>, and graduated from <b>Bangkit Academy 2022</b> in <b>Cloud Computing</b> learning path.
            </>
          ) : (
            <>
              Memiliki hampir satu tahun pengalaman gabungan proyek nyata atau proyek berbasis perusahaan di beberapa jenis perusahaan.
              Pengalaman saya meliputi pengerjaan langsung untuk proyek startup tahap pengembangan yang disebut aplikasi seluler <b>Deall by SejutaCita</b>,
              bekerja dengan agensi perangkat lunak bernama <b>Aksamedia</b> & <b>SCAP-ERP</b>, dan lulus dari <b>Bangkit Academy 2022</b> di jalur pembelajaran <b>Cloud Computing</b>.
            </>
          )}
        </p>
        <p>
          {language === 'en' ? (
            <>
              Proficient in JavaScript, TypeScript, Flutter, Kotlin, Swift and ReactJS. As well as versatile enough to switch roles
              and learn new technologies when needed. Additionally, I am highly motivated to contribute to open-source projects.
            </>
          ) : (
            <>
              Mahir dalam JavaScript, TypeScript, Flutter, Kotlin, Swift, dan ReactJS. Serta cukup serbaguna untuk beralih peran
              dan mempelajari teknologi baru saat dibutuhkan. Selain itu, saya sangat termotivasi untuk berkontribusi pada proyek sumber terbuka.
            </>
          )}
        </p>
        <div style={{ marginBottom: '2rem' }}>
          <a
            href="https://drive.google.com/file/d/1cxpJy8WTJy26KxbpgbOhtafLabkjA-sm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--wiki-infobox-bg)',
              color: 'var(--wiki-text)',
              border: '1px solid var(--wiki-border)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <AnimatedEditIcon /> {t('viewCV')}
          </a>
        </div>

        <h2 id="projects">{t('projects')}</h2>
        <div style={{ marginTop: '2rem' }}>
          {projects.map((project) => (
            <section key={project.id} className="project-section" style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--wiki-border)', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1.6rem', margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--wiki-heading)' }}>
                  {project.title}
                </h3>
              </div>

              <ul className={`wiki-gallery mobile-frames`} style={{ marginBottom: '1.5rem' }}>
                {project.images.map((img, idx) => (
                  <li
                    key={idx}
                    className="wiki-gallery-item"
                    onClick={() => setSelectedImage({ src: img, title: `${project.title} - ${language === 'en' ? 'Image' : 'Gambar'} ${idx + 1}` })}
                  >
                    <div className="wiki-gallery-img-container">
                      <img src={img} alt={`${project.title} ${idx + 1}`} loading="lazy" />
                    </div>
                    <div className="wiki-gallery-caption">
                      <span style={{ fontWeight: 'bold' }}>{project.title}</span> – {language === 'en' ? 'Detailed view' : 'Tampilan detail'} {idx + 1}
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      color: 'var(--wiki-text)',
                      backgroundColor: 'var(--wiki-infobox-bg)',
                      padding: '0.4rem 0.8rem',
                      border: '1px solid var(--wiki-border)',
                      borderRadius: '20px',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                    }}
                  >
                    <tool.icon size={14} />
                    {tool.name}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--wiki-text)', opacity: 0.9, marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.7' }}>
                {project.description[language]}
              </p>
            </section>
          ))}
        </div>

        <h2 id="skills">{t('skills')}</h2>
        <ul style={{ color: 'var(--wiki-text)' }}>
          <li><strong>Mobile:</strong> Flutter, Kotlin, Swift, Android Studio, Xcode</li>
          <li><strong>Web:</strong> ReactJS, JavaScript, TypeScript, Tailwind CSS, Node.js</li>
          <li><strong>Cloud & Tools:</strong> Google Cloud Platform (Cloud Computing), Git, Firebase Analytics</li>
        </ul>

        <h2 id="contact">{t('contact')}</h2>
        <p>
          {t('contactText1')} <a href="mailto:pratamalutfi60@gmail.com">pratamalutfi60@gmail.com</a> {t('contactText2')}
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="wiki-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="wiki-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="wiki-lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close" title="Close">×</button>
            <div className="wiki-lightbox-img-wrapper">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            <div className="wiki-lightbox-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ArticlePage;
