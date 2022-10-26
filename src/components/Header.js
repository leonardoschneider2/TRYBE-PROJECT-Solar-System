import React from 'react';
import './styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <h1 className="page-header-title">Solar System</h1>
        <h2 className="page-header-subtitle">TRYBE PROJECT</h2>
      </header>
    );
  }
}

export default Header;
