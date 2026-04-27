import React from 'react';
import PageLayout from '../components/PageLayout';
import Infobox from '../components/Infobox';
import { AnimatedEditIcon } from '../components/AnimatedIcons';
import { useAppContext } from '../context/AppContext';

const ArticlePage = () => {
  const { t, language } = useAppContext();

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
              Android using Flutter, with total downloads 42,916 for iOS, 92,058 for Android, and 252,000 active users by Firebase Analytics.
              Additionally, I contribute to the development of the Internet Banking website, focusing on transfer and payment features.
            </>
          ) : (
            <>
              Seorang lulusan ilmu komputer dengan semangat belajar yang besar dan minat yang tinggi dalam rekayasa perangkat lunak.
              Saat ini bekerja di PT. Bank Rakyat Indonesia sebagai Software Developer, yang mengkhususkan diri dalam aplikasi web dan seluler.
              Saya bertanggung jawab untuk mengembangkan aplikasi seluler Qlola IB Token (Qlola Mobile by BRI) dari awal untuk iOS dan
              Android menggunakan Flutter, dengan total unduhan 42.916 untuk iOS, 92.058 untuk Android, dan 252.000 pengguna aktif berdasarkan Firebase Analytics.
              Selain itu, saya berkontribusi dalam pengembangan situs web Internet Banking, dengan fokus pada fitur transfer dan pembayaran.
            </>
          )}
        </p>
        <p>
          {language === 'en' ? (
            <>
              Have almost one year of combined real project or company-based project experience across several types of companies.
              My experience includes hands-on for a development-stage startup project called Deall by SejutaCita mobile app,
              working with software agency called Aksamedia & SCAP-ERP, and graduated from Bangkit Academy 2022 in Cloud Computing learning path.
            </>
          ) : (
            <>
              Memiliki hampir satu tahun pengalaman gabungan proyek nyata atau proyek berbasis perusahaan di beberapa jenis perusahaan.
              Pengalaman saya meliputi pengerjaan langsung untuk proyek startup tahap pengembangan yang disebut aplikasi seluler Deall by SejutaCita,
              bekerja dengan agensi perangkat lunak bernama Aksamedia & SCAP-ERP, dan lulus dari Bangkit Academy 2022 di jalur pembelajaran Cloud Computing.
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ border: '1px solid var(--wiki-border)', padding: '0.5rem', backgroundColor: 'var(--wiki-infobox-bg)' }}>
              <div style={{ height: '150px', backgroundColor: 'var(--wiki-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', border: '1px solid var(--wiki-border)' }}>
                <span style={{ color: 'var(--wiki-text)', opacity: 0.7 }}>{t('projectScreenshot')} {i}</span>
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--wiki-text)' }}>{i === 1 ? 'Qlola IB Token' : 'Internet Banking BRI'}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--wiki-text)', opacity: 0.8 }}>{t('projectDesc')}</div>
            </div>
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
    </PageLayout>
  );
};

export default ArticlePage;
