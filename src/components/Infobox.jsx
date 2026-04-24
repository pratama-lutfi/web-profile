import React from 'react';
import profileImg from '../assets/profile.png';

const Infobox = () => {
  return (
    <aside className="wiki-infobox fade-in">
      <div className="infobox-title">Muhammad Lutfi Pratama</div>
      <div style={{ textAlign: 'center' }}>
        <img src={profileImg} alt="Muhammad Lutfi Pratama" className="infobox-image" />
        <div style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>Lutfi in 2026</div>
      </div>
      <table className="infobox-table">
        <tbody>
          <tr>
            <th>Role</th>
            <td>Software Developer</td>
          </tr>
          <tr>
            <th>Top Skills</th>
            <td>Flutter, ReactJS, TypeScript, Kotlin, Swift, Golang</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>Jakarta, Indonesia</td>
          </tr>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center', backgroundColor: '#eaecf0', fontWeight: 'bold', padding: '5px' }}>
              Contact Information
            </th>
          </tr>
          <tr>
            <th>Email</th>
            <td><a href="mailto:pratamalutfi60@gmail.com">pratamalutfi60@gmail.com</a></td>
          </tr>
          <tr>
            <th>Socials</th>
            <td>
              <a href="https://github.com/pratama-lutfi">GitHub</a><br />
              <a href="www.linkedin.com/in/muhammadlutfipratama">LinkedIn</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button style={{
          width: '100%',
          padding: '0.5rem',
          backgroundColor: '#f8f9fa',
          border: '1px solid #a2a9b1',
          cursor: 'pointer',
          fontSize: '0.85rem'
        }}>
          Download CV
        </button>
      </div>
    </aside>
  );
};

export default Infobox;
