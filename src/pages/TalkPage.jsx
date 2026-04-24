import React from 'react';
import PageLayout from '../components/PageLayout';

const TalkPage = () => {
  return (
    <PageLayout>
      <div className="fade-in">
        <h1>Talk: Muhamad Luthfi</h1>
        <p>From Wikipedia, the free encyclopedia</p>
        <div style={{ padding: '1rem', border: '1px solid #c8ccd1', backgroundColor: '#f8f9fa', marginTop: '1rem' }}>
          <strong>Welcome to the talk page!</strong> Feel free to leave a message here.
        </div>
        <h2 id="general">General</h2>
        <p>This is a place to discuss improvements to the article. Please sign your posts with four tildes (~~~~).</p>
      </div>
    </PageLayout>
  );
};

export default TalkPage;
