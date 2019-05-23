import React, { Component } from 'react';
import './profile.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      telephoneNumber: '',
      party: '',
    };
  }

  render() {
    return (
      <div>
        <div className="main-content main-content-profile">
          <div className="row">
            <div className="card card-profile-info">
              <div className="card-title">
                <i className="zmdi zmdi-accounts-list-alt icon" />
                Your profile info
              </div>
              <div className="card-content">
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">first name:</label>
                  <input id="user-first-name" type="text" />
                </div>
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">last name:</label>
                  <input id="user-last-name" type="text" />
                </div>
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">email:</label>
                  <input id="user-email" type="email" />
                </div>
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">phone:</label>
                  <input id="user-email" type="tel" />
                </div>
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">party:</label>
                  <input id="user-email" type="text" />
                </div>
                <div className="input-field input-field-stacked">
                  <label htmlFor="user-first-name">address:</label>
                  <input id="user-email" type="text" />
                </div>
              </div>

              <div className="card-actions">
                <button className="btn btn-outline btn-icon btn-discard-update" type="button">
                  cancel
                  <i className="zmdi zmdi-close icon-right" />
                </button>
                <button className="btn btn-icon btn-update-profile" type="button">
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
      </div>
    );
  }
}
