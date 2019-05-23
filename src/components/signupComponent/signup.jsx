import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-content">
          <div className="row signUp">
            <div className="banner banner-signUp">
              <div className="banner-img">
                <img
                  src="https://image.freepik.com/free-photo/group-multiethnic-diverse-hands-raised_53876-64967.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="banner-content">
                <h1 className="banner-heading">
                  It is your responsibility and your right to choose your leaders!
                  <span className="caption"> - Just do it and do it wisely</span>
                </h1>
              </div>
            </div>
            <div className="form-content">
              <form className="form card card-signUp">
                <div className="card-title">Create your account to vote!</div>
                <div className="card-content">
                  <div className="input-field">
                    <label htmlFor=""> email</label>
                    <input id="" type="email" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="">password</label>
                    <input id="" type="password" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="">Validate password</label>
                    <input id="" type="text" />
                  </div>
                </div>
                <div className="card-action">
                  <button className="btn" type="button">
                    signup
                  </button>
                </div>
                <div className="card-footer">
                  <p>
                    Have an account? &nbsp;
                    <Link to="/login">Login here</Link>
                  </p>
                  <p>
                    When you SignUp, you agree to our&nbsp;
                    <Link to="/terms">terms & conditions</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
