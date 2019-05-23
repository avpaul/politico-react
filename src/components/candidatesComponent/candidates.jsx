import React, { Component } from 'react';
import './candidates.scss';

export default class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-content main-content-candidates">
          <div className="candidates-header">
            <i className="zmdi zmdi-accounts icon" />
            Who are the candidates
          </div>
          <div className="card-group">
            <div className="card card-candidate card-stacked-left">
              <div className="card-img">
                <img
                  src="https://image.freepik.com/free-photo/african-man-beach-vacation-lifestyle-portrait-concept_53876-31586.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <button className="btn btn-icon btn-extend-card" type="button">
                  <i className="zmdi zmdi-open-in-new icon" />
                </button>
                <h3 className="card-title">first lastname</h3>
                <div className="card-body">
                  <p className="candidate-achievement">
                    <i className="zmdi zmdi-graduation-cap icon" />
                    &nbsp;MSC Economics, UNO
                  </p>
                  <p className="candidate-biography">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth...
                  </p>
                </div>
                <div className="card-action">
                  <button className="btn btn-vote" type="button">
                    vote
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-candidate card-stacked-left">
              <div className="card-img">
                <img
                  src="https://image.freepik.com/free-photo/serious-black-business-man-pointing-aside_1262-18299.jpg"
                  alt=""
                />
              </div>
              <div className="card-content">
                <button className="btn btn-icon btn-extend-card" type="button">
                  <i className="zmdi zmdi-open-in-new icon" />
                </button>
                <h3 className="card-title">first lastname</h3>
                <div className="card-body">
                  <p className="candidate-achievement">
                    <i className="zmdi zmdi-graduation-cap icon" />
                    &nbsp;MSC Economics, UNO
                  </p>
                  <p className="candidate-biography">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                    praising pain was born and I will give you a complete account of the system, and
                    expound the actual teachings of the great explorer of the truth...
                  </p>
                </div>
                <div className="card-action">
                  <div className="btn btn-vote">vote</div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
