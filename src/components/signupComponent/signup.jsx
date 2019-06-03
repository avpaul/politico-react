import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordValidation: '',
      errors: {},
    };
  }

  createUser = () => {
    const errors = {};
    const { email, password, passwordValidation } = this.state;
    if (password.length < 6) {
      errors.password = 'password must be 6 or more';
      this.setState({ errors });
      return;
    }
    if (password !== passwordValidation) {
      errors.passwordValidation = 'passwords not identical';
      this.setState({ errors });
      return;
    }

    axios
      .post('https://peoplevote.herokuapp.com/api/v1/auth/signup', {
        email,
        password,
        confirmPassword: passwordValidation,
        firstname: 'paul',
        lastname: 'av',
      })
      .then((response) => {
        if (response.status === 201) {
          this.props.history.push('/login');
        }
      })
      .catch((error) => {
        const { data } = error.response;
        if (data && data.error) {
          errors.all = data.error;
          this.setState({ errors });
        } else {
          errors.all = 'SignUp failed, please tyr again!';
          this.setState(errors);
        }
      });
  };

  signUpHandler = (e) => {
    this.createUser(e);
  };

  getErrors = (name) => {
    const { errors } = this.state;
    return errors[name];
  };

  render() {
    const { email, password, passwordValidation } = this.state;
    return (
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
                  <label htmlFor="user-email"> email</label>
                  <input
                    id="user-email"
                    type="email"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <span className="error">{this.getErrors('email')}</span>
                </div>
                <div className="input-field">
                  <label htmlFor="user-password">password</label>
                  <input
                    id="user-password"
                    type="password"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <span className="error">{this.getErrors('password')}</span>
                </div>
                <div className="input-field">
                  <label htmlFor="user-password-validation">Validate password</label>
                  <input
                    id="user-password-validation"
                    type="password"
                    value={passwordValidation}
                    onChange={e => this.setState({ passwordValidation: e.target.value })}
                  />
                  <span className="error">{this.getErrors('passwordValidation')}</span>
                </div>
                <div className="error signup-errors">{this.getErrors('all')}</div>
              </div>
              <div className="card-action">
                <button className="btn" type="button" onClick={this.signUpHandler}>
                  signUp
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
    );
  }
}
