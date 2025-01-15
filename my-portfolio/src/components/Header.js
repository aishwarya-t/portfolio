import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-container">
      {/* Name Section */}
      <div className="header-name">
        Aishwarya Thadiparthi
      </div>

      {/* Social Links */}
      <div className="header-links">
        <a
          href="https://linkedin.com/in/aishwaryat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/aishwarya-t"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:athadipa@uci.edu"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  </header>
);

export default Header;
