import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
