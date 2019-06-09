import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { redirectTo, history } = this.props;
    if (prevProps.redirectTo !== redirectTo) {
      history.push(redirectTo.to);
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors !== '') {
      return { errors: { all: nextProps.errors } };
    }
    return null;
  }

  signInUser = (e) => {
    e.preventDefault();
    const errors = {};
    const { email, password } = this.state;
    const { onLogin } = this.props;
    if (password.length < 6) {
      errors.password = 'password must be 6 or more';
      this.setState({ errors });
    } else {
      onLogin({ email, password });
    }
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
                    type="email"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <span className="error">{this.getErrors('email')}</span>
                </div>
                <div className="input-field">
                  <label htmlFor="user-password">password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <span className="error">{this.getErrors('password')}</span>
                </div>
                <div className="error signup-errors">{this.getErrors('all')}</div>
              </div>
              <div className="card-action">
                <button className="btn" type="button" onClick={this.signInUser}>
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

Login.propTypes = {
  redirectTo: propTypes.objectOf(propTypes.any).isRequired,
  onLogin: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.any).isRequired,
};

function mapStateToProps({ redirectTo, errors }) {
  return { redirectTo, errors };
}

export default connect(
  mapStateToProps,
  { onLogin: loginUser },
)(Login);
