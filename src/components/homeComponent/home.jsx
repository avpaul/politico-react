import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import disabledPersonImg from './disabled.jpg';
import './home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
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
  }

  render() {
    const { auth } = this.state;
    return (
      <div className="main-content">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">
              It is your responsibility and your right to choose your leaders!
              <span className="caption"> - Just do it and do it wisely.</span>
            </h1>
            <div className="banner-action">
              {!auth ? (
                <Fragment>
                  <Link className="btn btn-signup" to="/signup">
                    sign up
                  </Link>
                  <Link className="btn btn-outline btn" to="/login">
                    login
                  </Link>
                </Fragment>
              ) : (
                <Link className="btn btn-vote" to="/candidates">
                  vote
                </Link>
              )}
            </div>
          </div>
          <div className="banner-img">
            <img
              src="https://image.freepik.com/free-vector/vector-set-illustrated-people_53876-44100.jpg"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <h1 className="feature-intro-heading">How voting on Politico looks like?</h1>
        <div className="pt-features">
          <div className="pt-feature">
            <div className="feature-img">
              <img
                src="https://image.freepik.com/free-vector/hand-drawn-young-people-using-technological-devices-collection_23-2148106592.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <div className="feature-description">
              <div className="feature-title">Device independent</div>
              <div className="feature-caption">
                Politico can be used independent of platforms and devices, whether on your
                smartphone, tablet or computer
              </div>
            </div>
          </div>
          <div className="pt-feature">
            <div className="feature-description">
              <div className="feature-title">Accessibility</div>
              <div className="feature-caption">
                People with disabilities can take part in elections without requiring assistance
                from others
              </div>
            </div>
            <div className="feature-img">
              <img src={disabledPersonImg} alt="" srcSet="" />
            </div>
          </div>
          <div className="pt-features-bottom">
            <div className="pt-feature pt-feature-boxed">
              <div className="feature-img">
                <img
                  src="https://image.freepik.com/free-vector/businessman-holding-thumb-finger-stopwatch_3446-522.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="feature-description">
                <div className="feature-title">Fast and Efficient</div>
                <div className="feature-caption">
                  Elections on politico takes a short time and are very cheap compared to
                  traditional elections. Results are available at the moment, not after weeks
                </div>
              </div>
            </div>
            <div className="pt-feature pt-feature-boxed">
              <div className="feature-description">
                <div className="feature-title">Time and location independent</div>
                <div className="feature-caption">
                  Voters can participate in elections and vote regardless of their location at the
                  moment of election
                </div>
              </div>
              <div className="feature-img">
                <img
                  src="https://image.freepik.com/free-vector/airplane-holidays-travel-with-world-monuments_23-2147491300.jpg?2"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
