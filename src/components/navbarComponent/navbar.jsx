import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './navbar.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Politico</Link>
          <div className="nav_spacer" />
          <div className="menu">
            <Link to="/">candidates</Link>
            <Link to="/">parties</Link>
            <Link to="/">results</Link>
            {/* <Link to="/">profile</Link> */}
          </div>
        </nav>
      </Router>
    );
  }
}
