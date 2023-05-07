import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedIn.svg';
import nauka1 from '../assets/images/nauka1.png';

const NotFound = () => {
  return (
    <div className="card">
      <div className="header">
        <div className="logo">
          <a href=".">WAVES IN NAUKA</a>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100083086223252&mibextid=ZbWKwL"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/9ka/?fbclid=IwAR202eBsVMEu2-3yhuyYC9I2mVy38MvemhUaUNZ1PLiB_3jH-iPLt7dkYU8"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1>404 - Not Found!</h1>
        </div>
        <div className="cta">
          <Link to="/">Go Home</Link>
        </div>
      </div>
      <div className="footer">
        <img src={nauka1} width={100} height={100} alt="Logo" />
      </div>
    </div>
  );
};

export default NotFound;
