import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  signInUser = () => {
    const errors = {};
    const { email, password } = this.state;
    if (password.length < 6) {
      errors.password = 'password must be 6 or more';
      this.setState({ errors });
      return;
    }
    axios
      .post('https://peoplevote.herokuapp.com/api/v1/auth/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data.data[0];
          const { user } = response.data.data[0];
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          this.props.history.push('/candidates');
        }
      })
      .catch((error) => {
        const { data } = error.response;
        if (data && data.error) {
          errors.all = data.error;
          this.setState({ errors });
        } else {
          errors.all = 'SignIn failed, please tyr again!';
          this.setState(errors);
        }
      });
  };

  signInHandler = (e) => {
    this.signInUser(e);
  };

  getErrors = (name) => {
    const { errors } = this.state;
    return errors[name];
  };

  render() {
    const { email, password } = this.state;
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
              <div className="card-title">Login to your account to vote!</div>
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
                <div className="error signup-errors">{this.getErrors('all')}</div>
              </div>
              <div className="card-action">
                <button className="btn" type="button" onClick={this.signInHandler}>
                  login
                </button>
              </div>
              <div className="card-footer">
                <p>
                  Doesn&apos;t have an account? &nbsp;
                  <Link to="/signup">SignUp here</Link>
                </p>
                <p>
                  Forgot your password? Don&apos;t worry!
                  <Link to="/terms">Reset password</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
