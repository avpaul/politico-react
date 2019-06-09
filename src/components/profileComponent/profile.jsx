import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateProfile, fetchUserData } from '../../actions';
import Badge from '../badge/badge';
import './profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    const state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      party: '',
      address: '',
      auth: '',
      message: {},
      type: '',
    };

    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      if (Date.now() > payload.exp * 1000) {
        state.auth = false;
      } else {
        state.auth = true;
      }
    }
    this.state = state;
  }

  // get user data
  componentDidMount() {
    const { onFetchUserData, user } = this.props;
    onFetchUserData();
    this.setState(user);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.message !== prevState.message) {
      return { message: nextProps.message };
    }
    return null;
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = {};
    newValue[name] = value;
    this.setState(newValue);
  };

  saveProfile = () => {
    const { onUpdateProfile } = this.props;
    const {
      firstName, lastName, phoneNumber, userProfile, email, party, address,
    } = this.state;

    onUpdateProfile({
      firstName,
      lastName,
      phoneNumber,
      userProfile,
      email,
      party,
      address,
    });
  };

  render() {
    const {
      auth,
      firstName,
      lastName,
      phoneNumber,
      userProfile,
      email,
      party,
      address,
      message,
    } = this.state;

    // if the user is not authenticated, redirect to the home page
    if (!auth) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="main-content main-content-profile">
        <div className="row">
          {message.text && <Badge message={message.text} type={message.type} />}
          <div className="card card-profile-info">
            <div className="card-title">
              <i className="zmdi zmdi-accounts-list-alt icon" />
              Your profile info
            </div>
            <div className="card-content">
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">first name:</label>
                <input
                  id="user-first-name"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">last name:</label>
                <input
                  id="user-last-name"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">email:</label>
                <input
                  id="user-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">phone:</label>
                <input
                  id="user-email"
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="078 8888 888"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">party:</label>
                <input
                  id="user-email"
                  type="text"
                  name="party"
                  value={party}
                  placeholder="Your party"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="input-field input-field-stacked">
                <label htmlFor="user-first-name">address:</label>
                <input
                  id="user-email"
                  type="text"
                  value={address}
                  name="address"
                  placeholder="KN 134 St Nyarugenge"
                  onChange={this.onInputChange}
                />
              </div>
            </div>

            <div className="card-actions">
              <button className="btn btn-outline btn-icon btn-discard-update" type="button">
                cancel
                <i className="zmdi zmdi-close icon-right" />
              </button>
              <button
                className="btn btn-icon btn-update-profile"
                type="button"
                onClick={this.saveProfile}
              >
                save
                <i className="zmdi zmdi-check icon-right" />
              </button>
            </div>
            <div className="card-footer" />
          </div>

          <div className="aside">
            <div className="card card-profile">
              <img
                src="https://image.freepik.com/free-vector/face-zombie-vector-illustration_1262-4499.jpg"
                alt=""
              />
              <button className="btn btn-outline btn-icon btn-profile-img-change" type="button">
                change
                <i className="zmdi zmdi-upload icon-right" />
              </button>
            </div>

            <div className="table-container">
              <h2 className="table-header">
                <i className="zmdi zmdi-view-list icon" />
                Recent activities
              </h2>
              <table className="recent-votes">
                <thead>
                  <tr>
                    <th>date</th>
                    <th>election</th>
                    <th>candidate</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>city council</td>
                    <td>james louis</td>
                    <td>ongoing</td>
                  </tr>
                  <tr>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>city mayor</td>
                    <td>margrethe mona</td>
                    <td>ongoing</td>
                  </tr>
                  <tr>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>city mayor</td>
                    <td>margrethe mona</td>
                    <td>ongoing</td>
                  </tr>
                  <tr>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>city mayor</td>
                    <td>margrethe mona</td>
                    <td>ongoing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  onUpdateProfile: propTypes.func.isRequired,
  onFetchUserData: propTypes.func.isRequired,
};

function mapStateToProps({ user, message, errors }) {
  return {
    user,
    message,
    errors,
  };
}

export default connect(
  mapStateToProps,
  {
    onUpdateProfile: updateProfile,
    onFetchUserData: fetchUserData,
  },
)(Profile);
