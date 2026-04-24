import React from 'react';
import PageLayout from '../components/PageLayout';
import { useAppContext } from '../context/AppContext';

const TalkPage = () => {
  const { t } = useAppContext();

  return (
    <PageLayout>
      <div className="fade-in">
        <h1>{t('talkTitle')}</h1>
        <p>{t('subtitle')}</p>
        <div style={{ padding: '1rem', border: '1px solid var(--wiki-border)', backgroundColor: 'var(--wiki-infobox-bg)', marginTop: '1rem', color: 'var(--wiki-text)' }}>
          <strong>{t('welcomeTalk')}</strong> {t('leaveMsg')}
        </div>
        <h2 id="general">{t('general')}</h2>
        <p style={{ color: 'var(--wiki-text)' }}>{t('talkDesc')}</p>
      </div>
    </PageLayout>
  );
};

export default TalkPage;
