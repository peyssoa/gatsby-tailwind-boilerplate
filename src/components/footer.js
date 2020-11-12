import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} GATSBY TAILWIND BOILERPLATE
    </footer>
  );
};

export default Footer;
