import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { createUser } from '../../actions';
import './signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
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

  createUser = (e) => {
    e.preventDefault();
    const errors = {};
    const { email, password, confirmPassword } = this.state;
    const { onCreateUser } = this.props;

    // validate inputs
    if (password.length < 6) {
      errors.password = 'password must be 6 or more';
      this.setState({ errors });
      return;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'passwords not identical';
      this.setState({ errors });
      return;
    }
    // dispatch the create user action
    onCreateUser({ email, password, confirmPassword });
  };

  getErrors = (name) => {
    const { errors } = this.state;
    return errors[name];
  };

  render() {
    const { email, password, confirmPassword } = this.state;
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
                <div className="input-field">
                  <label htmlFor="user-password-validation">Validate password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => this.setState({ confirmPassword: e.target.value })}
                  />
                  <span className="error">{this.getErrors('confirmPassword')}</span>
                </div>
                <div className="error signup-errors">{this.getErrors('all')}</div>
              </div>
              <div className="card-action">
                <button className="btn" type="button" onClick={this.createUser}>
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

Signup.propTypes = {
  redirectTo: propTypes.objectOf(propTypes.any).isRequired,
  history: propTypes.arrayOf(propTypes.string).isRequired,
  onCreateUser: propTypes.func.isRequired,
};

function mapStateToProps({ redirectTo, errors }) {
  return {
    redirectTo,
    errors,
  };
}

export default connect(
  mapStateToProps,
  { onCreateUser: createUser },
)(Signup);
