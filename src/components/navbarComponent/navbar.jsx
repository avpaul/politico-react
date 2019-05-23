import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logoImage from './favicon.png';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <Link className="nav-logo" to="/">
            <img className="logo-img" src={logoImage} alt="politico" srcSet="" />
            Politico
          </Link>
          <div className="nav-spacer" />
          <button className="btn btn-show-menu" type="button">
            <i className="zmdi zmdi-menu" />
          </button>
          <div className="nav-menu">
            <Link className="menu-item" to="/candidates">
              candidates
            </Link>
            <Link className="menu-item" to="/parties">
              parties
            </Link>
            <Link className="menu-item" to="/results">
              results
            </Link>
            <Link className="menu-item profile-img" to="/profile">
              <i className="zmdi zmdi-account-o" />
            </Link>
            <button className="btn btn-close-menu" type="button">
              <i className="zmdi zmdi-close"></i>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
