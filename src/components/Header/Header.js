import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {

  displayName: 'Header';

  render () {
    return (
      <header>
        <div className="wrap-logo">
          <Link to="/"><h1>
            <span>Brendan</span>
            <span>English</span>
          </h1></Link>
        </div>
        <nav className="wrap-nav">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}