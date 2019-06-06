import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Badge from '../badge/badge';
import './profile.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      party: '',
      address: '',
      auth: false,
      message: '',
      type: '',
    };
  }

  componentWillMount() {
    // check if the user is logged in
    // if the user is logged in the token must be in th local storage
    // the token should not be expired
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      if (Date.now() > payload.exp * 1000) {
        this.setState({ auth: false });
        return;
      }
      this.setState({ auth: true });
    }

    // update the state with user info
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const {
        firstName, lastName, phoneNumber, userProfile, email, party, address,
      } = user;
      this.setState({
        firstName,
        lastName,
        phoneNumber,
        userProfile,
        email,
        party,
        address,
      });
    }
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = {};
    newValue[name] = value;
    this.setState(newValue);
  };

  saveProfile = () => {
    const {
      firstName, lastName, phoneNumber, userProfile, email, party, address,
    } = this.state;
    const token = localStorage.getItem('token');
    axios
      .put(
        'https://peoplevote.herokuapp.com/api/v1/auth/update',
        {
          firstName,
          lastName,
          phoneNumber,
          userProfile,
          email,
          party,
          address,
        },
        { headers: { authorization: `Bearer ${token}` } },
      )
      .then((response) => {
        if (response.status === 200) {
          const { user } = response.data;
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.setState({ message: 'Profile updated', type: 'success' });
        }
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ message: 'Profile update failed', type: 'error' });
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
      type,
    } = this.state;

    // if the user is not authenticated, redirect to the home page
    if (!auth) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="main-content main-content-profile">
        <div className="row">
          {message && <Badge message={message} type={type} />}
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
