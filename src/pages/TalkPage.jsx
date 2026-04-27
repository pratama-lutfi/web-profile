import React, { useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { useAppContext } from '../context/AppContext';

const TalkPage = () => {
  const { t } = useAppContext();
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const email = 'pratamalutfi60@gmail.com';
    const subject = encodeURIComponent('Message from Web Profile');
    const body = encodeURIComponent(message);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const insertFormatting = (type) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    let formatted = '';
    let cursorOffset = 0;

    switch (type) {
      case 'bold':
        formatted = `'''${selectedText || 'bold text'}'''`;
        cursorOffset = selectedText ? formatted.length : 3 + 'bold text'.length + 3;
        break;
      case 'italic':
        formatted = `''${selectedText || 'italic text'}''`;
        break;
      case 'underline':
        formatted = `<u>${selectedText || 'underline text'}</u>`;
        break;
      case 'link':
        formatted = `[[${selectedText || 'Link title'}]]`;
        break;
      case 'heading':
        formatted = `\n== ${selectedText || 'Heading'} ==\n`;
        break;
      case 'sig':
        formatted = ` ~~~~`;
        break;
      default:
        formatted = selectedText;
    }

    const newValue = text.substring(0, start) + formatted + text.substring(end);
    setMessage(newValue);

    // Focus back to textarea and set cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + formatted.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  return (
    <PageLayout>
      <div className="fade-in">
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          {t('talkTitle')}
        </h1>

        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginTop: '0.5rem' }}>
          {t('welcomeTalk')} {t('leaveMsg')}
        </p>

        <div className="talk-form-container" style={{ padding: '0', overflow: 'hidden' }}>
          <div className="wiki-toolbar">
            <button className="toolbar-btn" onClick={() => insertFormatting('bold')} title="Bold ('''text''')">B</button>
            <button className="toolbar-btn" onClick={() => insertFormatting('italic')} title="Italic (''text'')">I</button>
            <button className="toolbar-btn" onClick={() => insertFormatting('underline')} title="Underline (<u>text</u>)" style={{ textDecoration: 'underline' }}>U</button>
            <div className="toolbar-separator"></div>
            <button className="toolbar-btn" onClick={() => insertFormatting('link')} title="Internal Link ([[Link]])">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </button>
            <button className="toolbar-btn" onClick={() => insertFormatting('heading')} title="Heading (== Text ==)">H</button>
            <button className="toolbar-btn" onClick={() => insertFormatting('sig')} title="Signature (~~~~)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
            </button>
          </div>

          <div style={{ padding: '1.5rem' }}>
            <div className="talk-input-group" style={{ marginBottom: '1.5rem' }}>
              <label className="talk-label" htmlFor="talk-message">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {t('yourMessage')}
              </label>
              <textarea
                id="talk-message"
                ref={textareaRef}
                className="talk-textarea"
                placeholder={t('messagePlaceholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ borderTop: 'none', borderRadius: '0 0 6px 6px' }}
              />
              <div className="talk-hint">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                {t('talkHint')}
              </div>
            </div>

            <button
              className="talk-submit-btn"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <span>{t('sendMessage')}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default TalkPage;
