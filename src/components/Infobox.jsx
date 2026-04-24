import React from 'react';
import profileImg from '../assets/profile.png';
import { useAppContext } from '../context/AppContext';

const Infobox = () => {
  const { t, theme } = useAppContext();

  return (
    <aside className="wiki-infobox fade-in" style={{ backgroundColor: 'var(--wiki-infobox-bg)', color: 'var(--wiki-text)', borderColor: 'var(--wiki-border)' }}>
      <div className="infobox-title" style={{ backgroundColor: 'var(--wiki-border)', color: 'var(--wiki-heading)' }}>{t('name')}</div>
      <div style={{ textAlign: 'center' }}>
        <img src={profileImg} alt={t('name')} className="infobox-image" style={{ borderColor: 'var(--wiki-border)' }} />
        <div style={{ fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--wiki-text)', opacity: 0.8 }}>{t('lutfiIn')} 2026</div>
      </div>
      <table className="infobox-table">
        <tbody>
          <tr>
            <th style={{ color: 'var(--wiki-text)' }}>{t('role')}</th>
            <td style={{ color: 'var(--wiki-text)' }}>{t('softDev')}</td>
          </tr>
          <tr>
            <th style={{ color: 'var(--wiki-text)' }}>{t('topSkills')}</th>
            <td style={{ color: 'var(--wiki-text)' }}>Flutter, ReactJS, TypeScript, Kotlin, Swift, Golang</td>
          </tr>
          <tr>
            <th style={{ color: 'var(--wiki-text)' }}>{t('location')}</th>
            <td style={{ color: 'var(--wiki-text)' }}>Jakarta, Indonesia</td>
          </tr>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center', backgroundColor: 'var(--wiki-border)', fontWeight: 'bold', padding: '5px', color: 'var(--wiki-heading)' }}>
              {t('contactInfo')}
            </th>
          </tr>
          <tr>
            <th style={{ color: 'var(--wiki-text)' }}>{t('email')}</th>
            <td><a href="mailto:pratamalutfi60@gmail.com" style={{ color: 'var(--wiki-link)' }}>pratamalutfi60@gmail.com</a></td>
          </tr>
          <tr>
            <th style={{ color: 'var(--wiki-text)' }}>{t('socials')}</th>
            <td>
              <a href="https://github.com/pratama-lutfi" style={{ color: 'var(--wiki-link)' }}>GitHub</a><br />
              <a href="https://www.linkedin.com/in/muhammadlutfipratama" style={{ color: 'var(--wiki-link)' }}>LinkedIn</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button style={{
          width: '100%',
          padding: '0.5rem',
          backgroundColor: 'var(--wiki-infobox-bg)',
          color: 'var(--wiki-text)',
          border: '1px solid var(--wiki-border)',
          cursor: 'pointer',
          fontSize: '0.85rem'
        }}>
          {t('downloadCV')}
        </button>
      </div>
    </aside>
  );
};

export default Infobox;
