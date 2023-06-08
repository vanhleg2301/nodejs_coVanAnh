import React from 'react';
import Wave from './component/images/wave.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span style={{ fontWeight: 'bold' }}>@copyright
          Subject FER201m</span>
      </div>
      <img src={Wave} alt="" style={{ width: '100%' }} />
    </div>
  );
};

export default Footer;
